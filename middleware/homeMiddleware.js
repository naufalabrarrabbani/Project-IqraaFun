const jwt = require('jsonwebtoken');

const homeMiddleware = async (req, res, next) => {
    const { curdToken } = req.cookies
    if (curdToken) {
        try {
            const deCodeToken = await jwt.verify(curdToken, 'afidev')
            req.userInfo = deCodeToken
            next()
        } catch (error) {
            return res.render('dashboard/home')
        }
    } else {
        return res.render('dashboard/home')
    }
}

module.exports = homeMiddleware