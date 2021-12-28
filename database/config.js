const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_ATLAS


const dbConnection = async () => {

    try{
        await mongoose.connect( connectionString )
        console.log( "db connected 📶" )
    } catch ( error ) {
        console.log(error)
        throw new Error( "Cannot connect to db 🆘" )
    }

}

module.exports = { dbConnection }