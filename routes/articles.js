const express = require('express');
const Article = require('../bbdd').article;
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()});
});

router.get('/:id', async (req, res) => {
    res.send(req.params.id)
});

router.post('/', async (req, res) => {
    var article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`)
    } catch (error) {
        console.error(error);
        res.render('articles/new', { article: article });
    }
});

module.exports = router;