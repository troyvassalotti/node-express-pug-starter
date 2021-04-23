const express = require('express');
const router = express.Router();

// Pull some data in here if you want it
// Pass it in to the response.render object
// const data = require('../includes/data');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'A Cool Website'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About This Site'
    })
})

module.exports = router;