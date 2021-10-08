var socket = io();
var result;
var no = 0;
var btn = document.getElementById('pause');
var text = document.getElementById('text');
alert("haha3");
//给submit按钮添加点击事件
btn.onclick = function() {
    alert("haha");
    result = "haha ";
    socket.emit('chat message', result); //发送消息到服务器
    alert("haha1 ");
}

socket.on('chat message', function(msg) {
    alert("本次结果为 " + msg + ",可以开始下一场博饼 ");
});

function myFun() {
    socket.emit('people message', no);
    no++;
}
socket.on('people message', function(msg) {
    text.innerHTML = "welcome player " + msg;
})