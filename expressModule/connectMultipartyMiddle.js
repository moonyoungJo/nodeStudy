const fs= require('fs');
const express = require('express');
const multipart = require('connect-multiparty');

//multipart/form-data 인코딩 방식으로 전송된 파일을 사용할 수 있도록 지원해주는 미들웨어
const app = express();
app.use(multipart({uploadDir:__dirname + '/multipart'}));

app.get('/', (request, response) => {
    fs.readFile('connectMulti.html', (err, data) => {
        response.send(data.toString());
    });
});

app.post('/', (request, response) => {
    const comment = request.body.comment;
    const imageFile = request.files.image;

    if(imageFile) {
        const name = imageFile.name;
        const path = imageFile.path;
        const type = imageFile.type;

        if(type.indexOf('image') != -1){
            const outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, (err) => {
                response.redirect('/');
            });
        }else {
            fs.unlink(path, (error) => {
                response.sendStatus(404);
            });
        }
    }else{
        response.sendStatus(404);
    }
});

app.listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273');
});