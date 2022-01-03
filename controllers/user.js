const { response, request } = require('express')
const bcrypt = require('bcrypt');

const User = require('../models/user')

const usersGet = async (req = request, res = response) => {

    const queryStatements = { state: true }
    
    const [ total, users ] = await Promise.all([
        User.countDocuments( queryStatements ),
        User.find( queryStatements )
    ])

    res.json({
        total,
        users
    }).status(200)

  }

const userGet = async (req = request, res = response) => {

    const queryStatements = {email}

    const user = await User.find( queryStatements )

    res.status(201).json({ user })

}

const userCreate = async (req = request, res = response) => {

    try{
        const { password, ...body } = req.body

        const user = new User(body)

        //Hash password
        const saltRounds = Number(process.env.CRYPT_ROUNDS)

        const passwordHash = await bcrypt.hash(password, saltRounds)

        user.password = passwordHash

        //add creation date
        user.creationDate = new Date().toUTCString()
        
        //save user
        await user.save()

        res.status(201).json({
            user
        })

    } catch(err) {
        res.status(400).json({msg: err})
    }
    
}

const userDelete = async (req, res = response) => {

    const { id } = req.params

    const updatedFields = {
        status: false
    }

    await User.findByIdAndUpdate( id, updatedFields )

    res.status(204).json({})
}

const userUpdate = async (req = request, res = response) => {

    try{
        const { id } = req.params

        const {_id, ...other} = req.body

        const userDB = await User.findByIdAndUpdate( id, other )

        res.status(200).json({
            message: "resource updated successfully",
            userDB
        })

    } catch(err) {
        res.json({msg: err})
    }
}

module.exports = {
    usersGet,
    userGet,
    userCreate,
    userDelete,
    userUpdate
}