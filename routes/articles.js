const express = require('express');
const Article = require('../models/article');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()});
});

router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({slug: req.params.slug});
    if (article == null) {
        res.redirect('/');
    } else {
        res.render('articles/show', {article: article});
    }
});

router.post('/', async (req, res) => {
    var article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        article = await article.save();
        res.redirect(`/articles/${article.slug}`)
    } catch (error) {
        console.error(error);
        res.render('articles/new', { article: article });
    }
});

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;