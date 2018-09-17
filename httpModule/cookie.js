const http = require('http');

http.createServer((request, response) => {
    const date = new Date();
    date.setDate(date.getDate()+7);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfase=toast;Expires=' + date.toUTCString(),
            'dinner=Chicken'
        ]
    });

    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, () => {
    console.log('server is running...');
});