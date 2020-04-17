import Server from "../main"

describe('Connection Test', () => {

    beforeAll(async done => {
        await Server.events.on('start', async () => {
            done()
        })
    })

    test('Server Connection Test', async () => {
        const data = await Server.inject({
            method: 'GET',
            url: '/'
        })
        expect(data.statusCode).toBe(302)
    })

    afterAll(async done => {
        await Server.events.on('stop', () => {
            done()
        })
        await Server.stop()
    })
})



