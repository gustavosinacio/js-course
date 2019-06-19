var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4', () => console.log('Message Received:'));


server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (message, remote) => {
    const {
        address,
        family,
        port,
        size,
    } = remote

    const logit = address + ':' + port + ' → ' + size + ' bytes ← ' + message
    console.log(logit);
});

server.on('listening', () => {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});


server.bind(PORT, HOST);