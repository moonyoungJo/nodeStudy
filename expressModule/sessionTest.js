const express = require('express');
const session = require('express-session');

//세션을 쉽게 생성할 수 있도록 도와주는 미들웨어
const app = express();
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));

app.use((request, response) => {
    request.session.now = (new Date()).toUTCString();
    response.send(request.session);
});

app.listen(52273, () => {
    console.log('server is running...');
});