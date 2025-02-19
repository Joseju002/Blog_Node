const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')
const mongoDB = require('./bbdd')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/articles', articleRouter);

mongoDB.connectDB();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const articles = [{
        title: 'Artiulo de prueba',
        createdAt: new Date(),
        description: 'Descripcion de prueba'
    },
    {
        title: 'Artiulo 2',
        createdAt: new Date(),
        description: 'Descripcion de prueba número 2'
    }]
    res.render('articles/index', { articles: articles });
});

app.listen(port, () => 
    console.log('Aplicación funcionando en http://localhost:' + port)
);