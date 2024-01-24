const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.connect('mongodb+srv://mongodb-api:Rest-APIs@cluster0.huuao6r.mongodb.net/?retryWrites=true&w=majority') // mongodb://127.0.0.1:27017/iqrafun
        console.log('Database connect...')
    } catch (error) {
        console.log(error)

    }
}

module.exports = dbConnect
