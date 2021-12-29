const { Router } = require('express')
const { check } = require('express-validator')

const { validateFields } = require('../middlewares/validate-fields')

const { 
    usersGet,
    userGet,
    userCreate,
    userDelete,
    userUpdate
} = require('../controllers/user')

const { isEmailOk } = require('../helpers/db-validators')

const router = Router()

router.get('/', usersGet)

router.get('/:id', userGet)

router.put('/:id', userUpdate)

router.post('/',[
    check('name','name is mandatory').not().isEmpty(),
    check('email').isEmail(),
    check('email').custom( isEmailOk ),
    validateFields
], userCreate)

router.delete('/:id', userDelete)

module.exports = router