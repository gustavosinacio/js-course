var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
// var message = new Buffer('My KungFu is Good!');
var message = 'dasdasd'

var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST + ':' + PORT + ' - ' + bytes + ' bytes');
    client.close();
});

// client.send('test', 0, 4, PORT, HOST, (err, bytes) => {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST + ':' + PORT + ' - ' + bytes + ' ');
//     client.close();
// })