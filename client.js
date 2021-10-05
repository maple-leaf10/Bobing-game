var socket = io();

var messages = document.getElementById('messages');
var btn = document.getElementById('pause');
var input = document.getElementById('input');
//给submit按钮添加点击事件
btn.addEventListener('onclick', function(e) {
    e.preventDefault();
    if (result_player1.innerHTML) {
        socket.emit('chat message', result_player1.innerHTML); //发送消息到服务器
    }
    //alert("本次结果为"+result_player1.innerHTML+",可以开始下一场博饼");
});

socket.on('chat message', function(msg) {
    /*//创建一条元素
    var item = document.createElement('li'); //在html页面上增加一行消息，无论哪个网页端都可以看到
    item.textContent = msg;
    //将元素插入到页面上
    messages.appendChild(item);*/
    alert("本次结果为" + result_player1.innerHTML + ",可以开始下一场博饼");
});