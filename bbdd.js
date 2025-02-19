const mongoose = require('mongoose');
const mongoDBURI = "mongodb+srv://Jose:8136663461@clusterblog.7spxx.mongodb.net/";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const article = mongoose.model('Article', articleSchema);

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURI);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB: ', err);
        process.exit(1);
    }
};

module.exports = {
    article,
    connectDB
}