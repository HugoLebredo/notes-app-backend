require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')

const paths = {
        login: '/api/login',
        users: '/api/users',
    }

const app = express()

app.use(cors())

app.use( express.json() )

dbConnection()

app.use( paths.login, require('./routes/login') )
app.use( paths.users, require('./routes/user') )

app.listen(process.env.PORT, () => 
    console.log(`App listening at http://localhost:${process.env.PORT}`))