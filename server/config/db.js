const mongoose = require('mongoose');

const connectDB = () => {
    const uri = process.env.DBCONNECT_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to DB');
        })
        .catch(
            err => {
                console.log('err', err);
            }
        );
}

module.exports = connectDB