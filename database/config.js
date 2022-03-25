const mongoose = require('mongoose');
const pjson = require('../package.json')

const { MONGODB_ATLAS, MONGODB_ATLAS_TEST, NODE_ENV } = process.env

//const connectionString = NODE_ENV === 'test' ? MONGODB_ATLAS_TEST : MONGODB_ATLAS

const connectionString = NODE_ENV === 'test' ? pjson.config.mongo_test : MONGODB_ATLAS

const dbConnection = async () => {

    try{
        await mongoose.connect( connectionString )
        console.log( "db connected 📶" )
    } catch ( error ) {
        console.log(error)
        throw new Error( "Cannot connect to db 🆘", connectionString)
    }
    
}

module.exports = { dbConnection }