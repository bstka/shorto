import { Server as server } from '@hapi/hapi';
import Routes from './Routes/ApiRoutes'
import Database from './Config/Database'
import Config from "./Config/Config";

const Server = new server({
    port: process.env.PORT || Config.Port,
    host: Config.Host,
    routes: {
        cors: {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
            additionalHeaders: ["X-Requested-With"]
        }
    }
})

Server.route(Routes)

const init = async () => {
    await Server.start()
    await Database()
    if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') {
        console.log('Server Running on %s', Server.info.uri)
    }
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()

export default Server