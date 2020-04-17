const mongoose = require('mongoose')
const { connect } = mongoose
import Config from './Config'

const url = 'mongodb+srv://qbec:qbec123@shorter-hks73.gcp.mongodb.net/test?retryWrites=true&w=majority'

const Database = async () => {
    await connect(Config.MongoDBurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(e => console.log(e))
}

export default Database