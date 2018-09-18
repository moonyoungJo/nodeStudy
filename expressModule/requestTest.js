const express = require('express');
const app = express();

app.use((request, response) => {
    const agent = request.header('User-Agent');
    console.log(`request.headers : ${request.headers}`);
    console.log(`agent : ${agent}`);
    console.log(`request.query.name : ${request.query.name}`)

    response.sendStatus(200);//상태코드만 보내기
});

app.listen(52273, () => {
    console.log('server is running...');
});