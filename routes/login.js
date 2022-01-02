const { Router } = require('express')
const { loginPost } = require('../controllers/login')

const router = Router()

router.post('/',loginPost)

module.exports = router