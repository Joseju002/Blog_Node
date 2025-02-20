const config = require('./config');

const mongoose = require('mongoose');
const mongoDBURI = `mongodb+srv://Jose:${config.MONGODB_PASS}@clusterblog.7spxx.mongodb.net/`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURI);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;