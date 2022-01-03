const { model, Schema } = require('mongoose')

const noteSchema = new Schema({
    content: {
        type: String,
        required: [true,'a note cannot be empty']
    },
    important: {
        type: Boolean,
        required: true,
    },
    date:{
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

const Note = model('Note',noteSchema)

module.exports = Note