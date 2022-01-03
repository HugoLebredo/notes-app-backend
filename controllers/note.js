const { response, request } = require('express')

const Note = require('../models/note')

const notesGet = async (req = request, res = response) => {

    const notes = await Note.find()

    res.status(200).json({notes})

}

const noteCreate = async (req = request, res = response) => {

    const { body } = req

    const note = {...body}
    note.date = new Date()

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