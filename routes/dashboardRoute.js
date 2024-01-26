const authMiddleware = require('../middleware/authMiddleware')
const homeMiddleware = require('../middleware/homeMiddleware')
const dashboardController = require('../controllers/dashboardController')
const router = require('express').Router();

router.get('/', homeMiddleware, dashboardController.homePage)
router.get('/course', authMiddleware, dashboardController.coursePage)
router.get('/leaderboard', authMiddleware, dashboardController.leaderboardPage)
router.get('/redeem', authMiddleware, dashboardController.redeemPage)
router.get('/contact', dashboardController.contactPage)

module.exports = router