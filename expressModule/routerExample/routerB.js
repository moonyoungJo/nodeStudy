const express = require('express');
const router = express.Router();

router.get('/index', (request, response) => {
    response.send('<h1>routerB Index Page</h1>');
});

exports.router = router