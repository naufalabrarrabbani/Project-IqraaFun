const authMiddleware = require('../middleware/authMiddleware')
const dashboardController = require('../controllers/dashboardController')
const router = require('express').Router();
router.get('/dashboard', authMiddleware, dashboardController.dashboardPage)

module.exports = router