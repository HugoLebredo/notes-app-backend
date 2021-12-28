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
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    date:{
        type: Date,
        required: true
    }
})

const User = model('User',userSchema)

model.exports = User