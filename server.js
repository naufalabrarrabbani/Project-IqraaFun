const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');


app.set('views', './view');
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'view')));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(session({
    secret: '754h5456f4',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

fs.readdirSync(`${__dirname}/routes`).map(filename => {
    app.use('/', require(path.join(`${__dirname}`, '/routes', `${filename}`).replace('.js', '')))
})

app.get('/', (req, res) => {
    return res.send('Home')
})

dbConnect()

app.listen(8000, () => {
    console.log('Server is running port 8000');
})