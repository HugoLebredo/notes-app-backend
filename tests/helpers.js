require('dotenv').config()
const supertest = require('supertest')
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

const paths = {
        login: '/api/login',
        users: '/api/users',
        notes: '/api/notes'
    }

const app = express()

app.use(cors())

app.use( express.json() )

dbConnection()

app.use( paths.login, require('../routes/login') )
app.use( paths.users, require('../routes/user') )
app.use( paths.notes, require('../routes/note') )

app.listen(process.env.PORT, () => 
console.log(`App listening at http://localhost:${process.env.PORT}`))

const api = supertest(app)

const getAllContentFromNotes = async () => {

    const response = await api.get("/api/notes")

    const { notes } = response.body
        
    return { ids:  response.body.notes.map( note => note.iid ),
        notes}
}

module.exports = { app, 
                    api,
                    getAllContentFromNotes }