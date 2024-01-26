const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.connect('mongodb+srv://iqraafun:Abrarrabbani99@cluster0.xndz9ea.mongodb.net/?retryWrites=true&w=majority')
        console.log('Database connect...')
    } catch (error) {
        console.log(error)

    }
}

module.exports = dbConnect
