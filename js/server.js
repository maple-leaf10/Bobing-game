//引入websocket ws模块
var WebSocketServer = require('ws').Server,

    //初始化websocket
    wss = new WebSocketServer({ port: 9999 });
//每个客户端和服务端建立连接时触发
wss.on('connection', function(ws) {

    console.log('client connected');
    //收到客户端发送的信息时触发
    ws.on('message', function(message) {
        var msg = JSON.parse(message);
        var type = msg.type;
        var pid = msg.pid; //客户端发送的自己的信息
        switch (type) {
            case "connection":
                players[playerIndex].pid = pid;
                break;
            case "message":
                WSASERVICE_NOT_FOUND()
        }
    });

    //SIGINT这个信号是系统默认信号，代表信号中断，就是ctrl+c
    process.on('SIGINT', function() {
        console.log("Closing things");
        process.exit();
    });


});