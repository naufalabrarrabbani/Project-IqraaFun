const authMiddleware = require('../middleware/authMiddleware')
const dashboardController = require('../controllers/dashboardController')
const router = require('express').Router();
router.get('/', dashboardController.homePage)
router.get('/dashboard', authMiddleware, dashboardController.dashboardPage)
router.get('/course', authMiddleware, dashboardController.coursePage)
router.get('/leaderboard', authMiddleware, dashboardController.leaderboardPage)
router.get('/redeem', authMiddleware, dashboardController.redeemPage)

module.exports = router