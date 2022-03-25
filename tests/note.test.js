const mongoose = require('mongoose')

const Note = require('../models/note')

const { app, api, getAllContentFromNotes } = require('./helpers')

const initialNotes = require('./mockdata/notes.json')

beforeEach( async () => {

    await Note.deleteMany({})

    for (const note of initialNotes){
        const noteObject = new Note(note)
        await noteObject.save()
    }

})

afterAll(() => {
    mongoose.connection.close()
    app.listen().close()
})

describe('Check notes', () => {

    test('Notes are returned as JSON', async () => {

        await api
                .get("/api/notes")
                .expect(200)
                .expect('Content-Type',/application\/json/)
    
    })
    
    test(`There are ${initialNotes.length} notes`, async () => {

        const { notes } = await getAllContentFromNotes()
        
        expect(notes).toHaveLength(initialNotes.length)

    })

})