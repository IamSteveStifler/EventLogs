const event_logs = require('./event_logs');
const EventEmitter = require('events');
// Instantiate Object
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
    event_logs(msg)
});

setTimeout(()=>{
    myEmitter.emit('log', 'Go The Hell Anamika!!!!')
}, 2000);

