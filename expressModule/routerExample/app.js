const express = require('express');

var app = express();
app.use('/a', require('./routerA').router);
app.use('/b', require('./routerB').router);

app.listen(52273, () => {
    console.log('server is running...');
})