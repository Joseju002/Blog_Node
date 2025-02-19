const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles')
const mongoDB = require('./bbdd')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/articles', articleRouter);

mongoDB();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
});

app.listen(port, () => 
    console.log('Aplicación funcionando en http://localhost:' + port)
);