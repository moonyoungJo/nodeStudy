const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('첫 번째 미들웨어');
    console.log(`add request.num = 10`);
    console.log(`add response.num = 20`);
    request.num = 10;
    response.num = 20;
    next();
});

app.use((request, response, next) => {
    console.log('두 번째 미들웨어');
    console.log(`request.num : ${request.num}`);
    console.log(`response.num : ${response.num}`);
    next();
});

app.use((request, response, next) => {
    console.log('세 번째 미들웨어');
    
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>Test Page</h1>');
});

app.listen(52273, () => {
    console.log('server is running....');
});

