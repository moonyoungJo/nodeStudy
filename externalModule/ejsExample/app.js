const http = require('http')
const fs = require('fs')
const ejs = require('ejs')


/*
ejs : 템플릿 엔진 모듈로 특정 형식의 문자열을 HTML 형식의 문자열로 변환합니다.
*/
http.createServer((request, response) => {
    fs.readFile('ejsPage.ejs', 'utf8', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data, {
            name: 'moonmoon',
            description: 'Hello ejs'
        }));
    })
}).listen(52273, () => {
    console.log('server is running....');
})
