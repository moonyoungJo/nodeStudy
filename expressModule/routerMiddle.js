const express = require('express');
const fs = require('fs');
const app = express();

//static 미들웨어 : 웹서버에서 손쉽게 파일을 제공
app.use('/img', express.static(__dirname+'/public'));

app.get('/a', (request, response) => {
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b', (request, response) => {
    response.send('<a href="/a">Go to A</a>');
})

//params : /:id처럼 :기호를 사용해 지정된 라우팅 매개변수
//query : ?name=A와 같은 요청 매개 변수
app.get('/page/:id', (request, response) => {
    response.send(`<h1>${request.params.id}</h1>`);
})

//cookie-parse는 요청 쿠키를 추출하는 미들웨어
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/getCookie', (request , response) => {
    response.send(request.cookies);
});
app.get('/setCookie', (request, response) => {
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    response.redirect('/getCookie');
});

//body-parser : POST 요청 데이터를 추출하는 미들웨어
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get('/bodyResult', (request, response) => {
    if(request.cookies.auth){
        response.send('<h1>Success</h1>');
    }else {
        response.redirect('/login');
    }
});
app.get('/bodyTest', (request, response) => {
    fs.readFile('bodyParserHTML.html', (err, data) => {
        response.send(data.toString());
    });
});
app.post('/bodyTest', (request, response) => {
    const login = request.body.login;
    const password = request.body.password;

    console.log(login, password);
    console.log(request.body);

    if(login == 'rint' && password == '1234'){
        response.cookie('auth', true);
        response.redirect('/bodyResult');
    } else {
        response.redirect('/bodyTest');
    }
});

app.all('*', (request, response) => {
    response.sendStatus(404);
})

app.listen(52273, () => {
    console.log('server is running...');
})