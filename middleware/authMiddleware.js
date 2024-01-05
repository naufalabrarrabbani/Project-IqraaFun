const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const { curdToken } = req.cookies
    if (curdToken) {
        try {
            const deCodeToken = await jwt.verify(curdToken, 'afidev')
            req.userInfo = deCodeToken
            next()
        } catch (error) {
            return res.redirect('/login')
        }
    } else {
        return res.redirect('/login')
    }
}

module.exports = authMiddleware