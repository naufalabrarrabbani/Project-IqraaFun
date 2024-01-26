const formidable = require('formidable')
const validator = require('validator')
const fs = require('fs')
const authModel = require('../models/authModel')
class dashboardController {
    homePage = async (req, res) => {
        const { email } = req.userInfo
        const userInfo = await authModel.findOne({ email })
        return res.render('dashboard/index', { userInfo })
    };
    coursePage = async (req, res) => {
        const { email } = req.userInfo
        const userInfo = await authModel.findOne({ email })
        return res.render('dashboard/course', { userInfo })
    };
    leaderboardPage = async (req, res) => {
        const { email } = req.userInfo
        const userInfo = await authModel.findOne({ email })
        return res.render('dashboard/leaderboard', { userInfo })
    };
    redeemPage = async (req, res) => {
        const { email } = req.userInfo
        const userInfo = await authModel.findOne({ email })
        return res.render('dashboard/redeem', { userInfo })
    };
    contactPage = async (req, res) => {
        const { email } = req.userInfo
        const userInfo = await authModel.findOne({ email })
        return res.render('dashboard/contact', { userInfo })
    };
}

module.exports = new dashboardController()