const ws = require('nodejs-websocket')
let count = 0;

const server = ws.createServer(conn => {
    console.log('新的连接');
    count++
    conn.userName = `用户${count}`
    broadcast(`${conn.userName}进入了游戏`)
    conn.on('text', data => {
        broadcast(data)
    })
    conn.on('close', data => {
            console.log('关闭连接')
            count--
            broadcast(`${conn.userName}离开了游戏`)
        })
        //发生异常触发
    conn.on('error', data => {

    })
})

function broadcast(msg) {
    server.connections.forEach(item => {
        item.send(msg)
    })
}

server.listen(5500, () => {
    console.log("正在监听当前端口")
})