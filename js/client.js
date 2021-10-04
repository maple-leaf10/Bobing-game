var k = 0;
/*function addScript(url){
    document.write("<script language=javascript src="+url+"></script>");
}

addScript("js/pg3.js");*/

function WebSocketTest() {
    if ("WebSocket" in window) {
        alert("您的浏览器支持 WebSocket!");

        // 初始化一个 WebSocket 对象，参数指明url
        var ws = new WebSocket("ws:localhost:9999");
        k++;
        var playerID = "player" + k;
        // WebSocket 连接时候触发
        ws.onopen = function() {
            //使用 send() 方法发送数据
            var message = JSON.stringify({
                "type": "connection",
                "pid": playerID,
            });
            wsSend(message);
            alert("websocket success " + playerID);
        };

        // 接收服务端数据时触发
        ws.onmessage = function(message) {
            //json解码
            var msg = JSON.parse(message.data);
            //获取玩家id、消息类型
            var msgtype = msg.msgtype;
            var id = msg.pid;

            switch (msgtype) {
                case 'updateResult':
                    var result = msg.result;
                    updateResult(result, id); //todo
                    break;
                case 'updateImg':
                    var img1 = msg.dice_image1;
                    var img2 = msg.dice_image2;
                    var img3 = msg.dice_image3;
                    var img4 = msg.dice_image4;
                    var img5 = msg.dice_image5;
                    var img6 = msg.dice_image6;
                    updateOnline(img1, img2, img3, img4, img5, img6, id);
                    break;
                default:
                    alert("error message!");
                    break;
            }
        }


        //断开 web socket 连接成功触发事件
        ws.onclose = function() {
            // 关闭 websocket
            alert("连接已关闭...");
        };

        function wsSend(content) { //由于传输的message类型多样，由各函数自行编码后传递
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(content);
                console.log("message sent");
            }
        }
    } else {
        // 浏览器不支持 WebSocket
        alert("您的浏览器不支持 WebSocket!");
    }
}

function updateResult(result, id) {
    //更新我的页面的对手部分
    if (id == "player1") {
        //更新右侧的碗的博饼结果
        output_player2.innerHTML = result;
    } else if (id == "player2") {
        output_player1.innerHTML = result;
    }
}

function updateOnline(img1, img2, img3, img4, img5, img6, id) {
    //更新我的页面的对手部分
    if (id == "player1") {
        //更新右侧的碗的骰子样式
        pic1[1].src = img1;
        pic2[1].src = img2;
        pic3[1].src = img3;
        pic4[1].src = img4;
        pic5[1].src = img5;
        pic6[1].src = img6;
    } else if (id == "player2") {
        pic1[0].src = img1;
        pic2[0].src = img2;
        pic3[0].src = img3;
        pic4[0].src = img4;
        pic5[0].src = img5;
        pic6[0].src = img6;
    }
}
// messageResult();
function messageResult(result) {
    var message_result = JSON.stringify({
        "type": "message", //向服务器告知的消息类型
        "pid": playerID, //向服务器告知的本玩家ID
        "msgtype": "updateResult", //向对方玩家告知更新类型
        "result": result, //向对方玩家告知博饼结果
    });
    wsSend(message_result);
}
//messageOnline();
function messageOnline(img1, img2, img3, img4, img5, img6) {
    var message_online = JSON.stringify({
        "type": "message", //向服务器告知的消息类型
        "pid": playerID, //向服务器告知的本玩家ID
        "msgtype": "updateImg", //向对方玩家告知更新类型
        "dice_image1": img1, //向对方玩家告知投掷结果样式
        "dice_image2": img2, //向对方玩家告知投掷结果样式
        "dice_image3": img3, //向对方玩家告知投掷结果样式
        "dice_image4": img4, //向对方玩家告知投掷结果样式
        "dice_image5": img5, //向对方玩家告知投掷结果样式
        "dice_image6": img6 //向对方玩家告知投掷结果样式
    });
    wsSend(message_online);
}

//骰子转动事件
var btn1 = document.getElementById('btn1');
var pic1 = document.querySelectorAll('#pic1');
var pic2 = document.querySelectorAll('#pic2');
var pic3 = document.querySelectorAll('#pic3');
var pic4 = document.querySelectorAll('#pic4');
var pic5 = document.querySelectorAll('#pic5');
var pic6 = document.querySelectorAll('#pic6');
var result_player1 = document.querySelector('.output_player1');
var result_player2 = document.querySelector('.output_player2');
var result = null;
btn1.onclick = function() {
    window.location.href = 'pg1.html';
}
var j = 0;
var flag = new Array(2);
flag[0] = 0;
flag[1] = 0;
var flag2 = 0;
var flag3 = 0;
var start = document.querySelectorAll('#start');
var stop1 = document.querySelectorAll('#stop');
start[0].onclick = function() {
    j = 0;
    if (flag[0] == 1) {
        result_player1.innerHTML = "<span></span>";
        flag[0] = 0;
    }
    fun();
    flag2 = 1;
}
start[1].onclick = function() {
    j = 1;
    if (flag[1] == 1) {
        result_player2.innerHTML = "<span></span>";
        flag[1] = 0;
    }
    fun();
    flag3 = 1;
}
stop1[0].onclick = function() {
    if (flag3 == 1) {
        alert("请在你所在的玩家位置按停止键,本轮结果不算数");
    }
    fun2();
    result_player1.innerHTML = "<span>" + result + "</span>";
    flag[0] = 1;
    flag2 = 0;
}
stop1[1].onclick = function() {
    if (flag2 == 1) {
        alert("请在你所在的玩家位置按停止键，本轮结果不算数");
    }
    fun2();
    result_player2.innerHTML = "<span>" + result + "</span>";
    flag[1] = 1;
    flag3 = 0;

}
var flagtime;
var oldinner;
var num;
num = new Array(6);

function init() {
    pic1[j].src = "pic/dice_pic1.jpg";
    pic2[j].src = "pic/dice_pic2.jpg";
    pic3[j].src = "pic/dice_pic3.jpg";
    pic4[j].src = "pic/dice_pic4.jpg";
    pic5[j].src = "pic/dice_pic5.jpg";
    pic6[j].src = "pic/dice_pic6.jpg";
}

function fun() {
    var arr;
    arr = new Array(6);
    for (var i = 0; i < 6; i++)
        num[i] = 0;
    for (var i = 0; i < 6; i++) {
        arr[i] = Math.floor(Math.random() * 6 + 1);
        num[arr[i] - 1]++;
    }
    pic1[j].src = "pic/dice_pic" + arr[0] + ".jpg";
    pic2[j].src = "pic/dice_pic" + arr[1] + ".jpg";
    pic3[j].src = "pic/dice_pic" + arr[2] + ".jpg";
    pic4[j].src = "pic/dice_pic" + arr[3] + ".jpg";
    pic5[j].src = "pic/dice_pic" + arr[4] + ".jpg";
    pic6[j].src = "pic/dice_pic" + arr[5] + ".jpg";
    messageOnline(pic1[j].src, pic2[j].src, pic3[j].src, pic4[j].src, pic5[j].src, pic6[j].src);
    flagtime = setTimeout(fun, 100);

}

function fun2() {
    var sijin = 0;
    window.clearTimeout(flagtime);
    if (num[3] >= 4) {
        if (num[3] == 6)
            result = "状元-红六勃";
        else if (num[3] == 5)
            result = "状元-五红";
        else if (num[0] == 2)
            result = "状元-插金花";
        else
            result = "状元-四红";
    } else if (num[0] == 6)
        result = "状元-遍地锦";
    else if (num[1] == 6 || num[2] == 6 || num[4] == 6 || num[5] == 6)
        result = "状元-黒六勃";
    else if (num[0] == 5 || num[1] == 5 || num[2] == 5 || num[4] == 5 || num[5] == 5)
        result = "状元-五子登科";
    else {
        for (var i = 0; i < 6; i++) {
            if (num[i] == 4)
                sijin = 1;
        }
        if (sijin == 1)
            result = "进士-四进";
        else if (num[0] == 1 && num[1] == 1 && num[2] == 1 && num[3] == 1 && num[4] == 1 && num[5] == 1)
            result = "榜眼-对堂";
        else if (num[3] == 3)
            result = "探花-三红";
        else if (num[3] == 2)
            result = "举人-二举";
        else if (num[3] == 1)
            result = "秀才-一秀";
        else
            result = "哎呀，再博一次吧";
    }
    messageResult(result);
}