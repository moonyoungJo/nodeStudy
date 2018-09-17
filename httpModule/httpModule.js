const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {
    const pathName = url.parse(request.url).pathname;

    if(pathName == '/'){
        fs.readFile('HTMLPage.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    } else if(pathName == '/jeju'){
        fs.readFile('jeju1.png', (err, data) => {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.end(data);
        })
    }else if(pathName == '/redirect'){
        response.writeHead(302, {'Location': '/'});
        response.end();
    }else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>invalid page</h1>');
    }
})

server.listen(52273, () => {
    console.log('server is running...');
});