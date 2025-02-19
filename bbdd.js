const mongoose = require('mongoose');
const mongoDBURI = "mongodb+srv://Jose:8136663461@clusterblog.7spxx.mongodb.net/";

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