const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 9998;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pg6.html');
});
//dirname指向被执行的js的绝对路径,之后再添加一个index.html
//将事件发送给每个用户，Socket.IO 提供了 io.emit 方法：
io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});
//对对应端口的监听
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
//dirname指向被执行的js的绝对路径,之后再添加一个index.html