const express = require('express');
const app = express();

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

app.all('*', (request, response) => {
    response.endStatus(404);
})

app.listen(52273, () => {
    console.log('server is running...');
})