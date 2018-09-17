const events = require('events')

exports.timer = new events();

setInterval(() => {
    exports.timer.emit('tick');
}, 1000);