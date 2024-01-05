const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/iqrafun')
        console.log('Database connect...')
    } catch (error) {
        console.log(error)

    }
}

module.exports = dbConnect