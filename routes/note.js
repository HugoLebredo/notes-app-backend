const { Router } = require('express')
const { check } = require('express-validator')

const { validateJWT } = require('../middlewares/validate-jwt')
const { validateFields } = require('../middlewares/validate-fields')

const { 
    notesGet,
    noteCreate,
} = require('../controllers/note')

const router = Router()

router.get('/',notesGet)

router.post('/',[
    validateJWT,
    validateFields
],noteCreate)

module.exports = router
