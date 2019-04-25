const router = require('express').Router()
const UserController = require('../controllers/userController')
const routeApod = require('./apod')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/', UserController.getAllUser)

router.use('/apods', routeApod)

module.exports = router