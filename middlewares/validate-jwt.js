const { request, response } = require('express')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const validateJWT = async ( req = request, res = response, next ) => {

    const authorization = req.header('authorization')
    const tokenSecret = process.env.SECRET
    console.log({authorization})
    let token = null

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }

    if( !token ) {
        return res.status(401).json({
            msg: 'Request has no token'
        })
    }

    try {

        const { id } = jwt.verify(token, tokenSecret)

        const authUser = await User.findById( id )
        
        console.log("usuarioooo ",authUser)
        //check if user exists
        if( ! (authUser || authUser.state) ) {
            return res.status(401).json({
                msg: "Invalid Token"
            })
        }

        req.authUser = authUser

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            msg: 'Invalid Token'
        })
    }
}

module.exports = { validateJWT }