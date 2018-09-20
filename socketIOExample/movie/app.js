const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

//HTMLPage.html제공
app.get('/', (request, response, next) => {
    fs.readFile('HTMLPage.html', (error, data) => {
        response.send(data.toString());
    })
});
//좌석 정보를 json으로 보내기
app.get('/seats', (request, response, next) => {
    response.send(seats);
});

server.listen(52273, () => {
    console.log('Server Running...')
});

//웹소켓
const io = socketio.listen(server);
io.sockets.on('connection', (socket) => {
    //reserve 이벤트로 보내면 예약처리
    socket.on('reserve', (data) => {
        seats[data.y][data.x] = 2;

        //연결된 브라우저들에게 modifyReserve로 알림
        io.sockets.emit('modifyReserve', data);
    })
})