const formidable = require('formidable')
const validator = require('validator')
const fs = require('fs')
class dashboardController {
    homePage = async (req, res) => {
        const { userInfo } = req
        return res.render('home', { userInfo })
    };
    dashboardPage = async (req, res) => {
        const { userInfo } = req
        return res.render('dashboard/index', { userInfo })
    };
    coursePage = async (req, res) => {
        const { userInfo } = req
        return res.render('dashboard/course', { userInfo })
    };
    leaderboardPage = async (req, res) => {
        const { userInfo } = req
        return res.render('dashboard/leaderboard', { userInfo })
    };
    redeemPage = async (req, res) => {
        const { userInfo } = req
        return res.render('dashboard/redeem', { userInfo })
    };
}

module.exports = new dashboardController()