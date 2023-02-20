matrix = [1, 1, 1]
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var messages = [];
app.use(express.static("my_modules"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
    socket.emit("send matrix", matrix);
})