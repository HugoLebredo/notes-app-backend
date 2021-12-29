const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is mandatory']
    },
    email: {
        type: String,
        required: [true,'Email is mandatory']
    },
    password: {
        type: String,
        required: [true,'Password is mandatory']
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    creationDate:{
        type: Date,
        required: true
    }
})

const User = model('User',userSchema)

module.exports = User