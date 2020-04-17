import { Schema, model } from 'mongoose'

const LinkSchema = new Schema({
    LongUrl: {
        type: String,
        required: true
    },
    ShortUrl: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default model('LinkSchema', LinkSchema)