require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express()

app.use(cors())

dbConnection()

app.listen(process.env.PORT, () => 
    console.log(`Example app listening at http://localhost:${process.env.PORT}`))
