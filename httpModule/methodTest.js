const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    
    if(request.method == 'GET'){
        const query = url.parse(request.url, true).query;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('<h1>' + JSON.stringify(query) + '</h1>');

    }else if(request.method == 'POST'){
        request.on('data', (data) => {
            console.log('POST Data:', data);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(52273, () => {
    console.log('server is running...');
});