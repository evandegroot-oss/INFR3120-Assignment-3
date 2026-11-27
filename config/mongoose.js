require('dotenv').config();

const mongoose = require('mongoose');

module.exports = function() {

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('MongoDB connection error:', error);
        });

};