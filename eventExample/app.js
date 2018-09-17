const rint = require('./rint');

rint.timer.on('tick', (code) => {
    console.log('이벤트를 실행합니다.');
});