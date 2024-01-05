const formidable = require('formidable')
const validator = require('validator')
const authModel = require('../models/authModel')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {
    registerPage = (req, res) => {
        const { curdToken } = req.cookies
        if (curdToken) {
            return res.redirect('/dashboard')
        } else {
            return res.render('dashboard/register', { error : ''})
        }
    }
    loginPage = (req, res) => {
        const { curdToken } = req.cookies
        if (curdToken) {
            return res.redirect('/dashboard')
        } else {
            return res.render('dashboard/login', { error : ''})
        }
    }
    userRegister = async (req, res) => {
        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {
            const { name, age, email, password, point } = fields;
            const { image } = files;

            const error = {};

            if (validator.isEmpty(name)){
                error.name = 'Please provide your name'
            }
            if (validator.isEmpty(age)){
                error.age = 'Please provide your age'
            }
            if (validator.isEmpty(email)){
                error.email = 'Please provide your email'
            }
            if (!validator.isEmpty(email) && !validator.isEmail(email)){
                error.email = 'Please provide valid email'
            }
            if (validator.isEmpty(password)){
                error.password = 'Please provide your password'
            }
            if (Object.keys(error).length > 0) {
                return res.render('dashboard/register', { error })
            } else {
                try {
                    const user = await authModel.findOne({ email })
                    if (user) {
                        req.flash('error', 'Email already exist')
                        console.log('error')
                        return res.redirect('/register')
                    } else {
                        const createUser = await authModel.create(
                            {
                                name,
                                age,
                                email,
                                password: await bcrypt.hash(password, 9),
                                point: 0,
                                image: "avatar-profile.jpg",
                            }
                        )
                        
                        const token = jwt.sign({
                            id: createUser.id,
                            name: createUser.name,
                            age: createUser.age,
                            email: createUser.email,
                            password: createUser.password,
                            point: createUser.point,
                            image: createUser.image,
                        }, 'afidev', {
                            expiresIn: '3d'
                        })

                        res.cookie('curdToken', token, {
                            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                        })

                        req.flash('success', 'Your register successfull')
                        return res.redirect('/dashboard')

                    }
                } catch (error) {
                    
                }
            }
        })
    }
    userLogin = async (req, res) => {
        const { email, password } = req.body
        const error = {}
        if (validator.isEmpty(email)){
            error.email = 'Please provide your email'
        }
        if (!validator.isEmpty(email) && !validator.isEmail(email)){
            error.email = 'Please provide valid email'
        }
        if (validator.isEmpty(password)){
            error.password = 'Please provide your password'
        }
        if (Object.keys(error).length > 0) {
            return res.render('dashboard/login', { error })
        } else {
            try {
                const user = await authModel.findOne({ email })
                if (user) {
                    const matchPassword = await bcrypt.compare(password, user.password)
                    if (matchPassword) {
                        const token = jwt.sign({
                            id: user._id,
                            name: user.name,
                            age: user.age,
                            email: user.email,
                            password: user.password,
                            point: user.point,
                            image: user.image,
                        }, 'afidev', {
                            expiresIn: '3d'
                        })

                        res.cookie('curdToken', token, {
                            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                        })

                        req.flash('success', 'Your login successfull')
                        return res.redirect('/dashboard')
                    } else {
                        req.flash('error', 'Your password invalid')
                        return res.redirect('/login')
                    }
                } else {
                    req.flash('error', 'Email does not exist')
                    return res.redirect('/login')
                }
            } catch (error) {
                
            }
        }
    }
}
module.exports = new authController()