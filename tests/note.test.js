const mongoose = require('mongoose')

const Note = require('../models/note')

//const { app, api, getAllContentFromProfiles } = require('./helpers')

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

describe('Get notes', () => {

    test('Notes are returned as JSON', async () => {

        await api
                .get("/api/note")
                .expect(200)
                .expect('Content-Type',/application\/json/)
    
    })
    
    test(`There are ${initialNotes.length} notes`, async () => {

        const { notes } = await getAllContentFromProfiles()
        
        expect(notes).toHaveLength(initialNotes.length)

    })

})