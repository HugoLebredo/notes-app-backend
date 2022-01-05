const { response, request } = require('express')

const Note = require('../models/note')

const notesGet = async (req = request, res = response) => {

    const notes = await Note.find()

    res.status(200).json({notes})

}

const noteCreate = async (req = request, res = response) => {

    const { body, authUser } = req

    console.log("Macario: ",authUser)

    const note = {...body}
    console.log(req)
    note.date = new Date()
    note.user = authUser.email

    try {
        const noteDB = await Note.create(note)
        res.status(201).json(noteDB)
    } catch(e) {
        throw new Error(e)
    }

}

module.exports = {
    notesGet,
    noteCreate,
}