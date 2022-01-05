const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const User = require('../models/user')

const loginPost = async ( req = request , res = response ) => {

    const { body } = req
    const { email, password } = body
    const tokenSecret = process.env.SECRET

    const user = await User.findOne({ email })

    const passwordCorrect = user === null
        ? false 
        : await bcrypt.compare(password,user.password)

    if (! ( user && passwordCorrect )) {
        res.status(401).json({ error: "invalid user or password" })
    }

    const userForToken = {
        id: user._id,
        name: user.name,
        email
    }

    const token = jwt.sign(userForToken, tokenSecret)

    res.send({
        email: user.email,
        name: user.name,
        token
    })
    
}

module.exports = {
    loginPost,
}