const express = require('express');
const morgan = require('morgan');

const app = express();

//웹 요청이 들어왔을 때 로그를 출력하는 미들웨어
app.use(morgan('combined'));
app.use((request, response) => {
    response.send('<h1>express Basic</h1>');
});

app.listen(52273, () => {
    console.log('server is running...')
})