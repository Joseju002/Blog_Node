const express = require('express');
const articleRouter = require('./routes/articles')

const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);

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
    res.render('index', { articles: articles });
});

app.listen(port, () => 
    console.log('Aplicación funcionando en http://localhost:' + port)
);