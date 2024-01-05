const formidable = require('formidable')
const validator = require('validator')
const fs = require('fs')
class dashboardController {
    dashboardPage = async (req, res) => {
        const { userInfo } = req
        return res.render('dashboard/index', { userInfo })
    };
}

module.exports = new dashboardController()