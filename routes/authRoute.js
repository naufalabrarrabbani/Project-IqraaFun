const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const authController = require('../controllers/authController')
router.get('/register', authController.registerPage)
router.get('/login', authController.loginPage)
router.get('/success', authMiddleware, authController.successPage)
router.post('/user-register', authController.userRegister)
router.post('/user-login', authController.userLogin)

module.exports = router