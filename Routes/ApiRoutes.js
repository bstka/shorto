import ApiController from '../Controller/ApiController'
const index = [
    {
        method: 'GET',
        path: '/',
        handler: ApiController.Redirector
    },
    {
        method: 'POST',
        path: '/',
        handler: ApiController.ShortUrlGenerator
    },

    {
        method: 'GET',
        path: '/{unique}',
        handler: ApiController.RedirectToLongUrl
    },
    
    {
        method: 'GET',
        path: '/count',
        handler: ApiController.ShortUrlCounter
    }
]

export default index