import LinkSchema from '../Model/LinkSchema';
import makeid from '../Utils'
import Config from "../Config/Config";

const index = {
    Redirector: async (req, res) => {
        return res.redirect(Config.IndexUrl).code(302)
    },

    ShortUrlGenerator: async (req, res) => {
        const { LongUrl, ShortUrl } = req.payload
        if (LongUrl.length > 5 || LongUrl !== undefined || LongUrl !== null ) {
            const ranId = makeid(5)
            await LinkSchema.create({
                LongUrl: req.payload.LongUrl,
                ShortUrl: ShortUrl.length < 5 ? ranId : ShortUrl
            })
            return res.response({
                Message: 'Url Berhasil Dibuat!',
                ShortUrl: ShortUrl.replace(/[^\w\s]/gi, '').length < 5 ? ranId : ShortUrl.replace(/[^\w\s]/gi, '')
            })
        }
        return res.response({
            Message: 'Error!, Url Harus Di-isi dan harus lebih dari 5 karakter!'
        })
    },

    RedirectToLongUrl: async (req, res) => {
        const { unique } = req.params
        const RedirectUrl = await LinkSchema.findOne({ ShortUrl: unique.replace(/[^\w\s]/gi, '') }).catch(e => console.log(e))
        if (RedirectUrl === null) {
            return res.response({
                Status: 404,
                Message: "Wah, Linkya ga ada kak!, cek lagi coba!",
                Link: ''
            }).code(404)
        }else {
            const { LongUrl } = RedirectUrl
            const httpsCheck = new RegExp("\\b" + 'https://' + "\\b").test(LongUrl) || new RegExp("\\b" + 'http://' + "\\b").test(LongUrl)
            // return res.response({
            //     Status: 200,
            //     Link: httpsCheck ? LongUrl : `https://${LongUrl}`
            // })
            return res.redirect(httpsCheck ? LongUrl : `https://${LongUrl}`)
        }
        
        
    },

    ShortUrlCounter: async (req, res) => {
        const countValue = await LinkSchema.estimatedDocumentCount()
        return res.response({
            LinkShorted: countValue
        })
    }
}

export default index