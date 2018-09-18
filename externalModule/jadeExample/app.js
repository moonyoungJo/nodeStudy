const http = require('http')
const fs = require('fs')
const jade = require('jade')


/*
jade : ejs와 같은 템플릿 엔진 모듈입니다. 특수한 형태의 HTML 페이지 위에 특수 태그를 몇 개 추가한 것
*/
http.createServer((request, response) => {
    fs.readFile('jadePage.jade', 'utf8', (error, data) => {
        const fn = jade.compile(data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(fn({
            name: 'moonmoon',
            description: 'hello jade'
        }));
    })
}).listen(52273, () => {
    console.log('server is running....');
})
