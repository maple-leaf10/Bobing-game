var btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    window.location.href = 'pg1.html';
}
var btn1 = document.getElementById('btn1');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var pic4 = document.getElementById('pic4');
var pic5 = document.getElementById('pic5');
var pic6 = document.getElementById('pic6');
var result_player1 = document.querySelector('.output_player1');
var result_player2 = document.querySelector('.output_player2');
var result_player3 = document.querySelector('.output_player3');
var result_player4 = document.querySelector('.output_player4');
var result = null;

var flag = new Array(4);
flag[0] = 0;
flag[1] = 0;
flag[2] = 0;
flag[3] = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var start = document.querySelectorAll('#start');
var stop1 = document.querySelectorAll('#stop');

start[0].onclick = function () {
    if (flag[0] == 1) {
        result_player1.innerHTML = "<span></span>";
        flag[0] = 0;
    }
    fun();
    flag2 = 1;
}
start[1].onclick = function () {
    if (flag[1] == 1) {
        result_player2.innerHTML = "<span></span>";
        flag[1] = 0;
    }
    fun();
    flag3 = 1;
}
start[2].onclick = function () {
    if (flag[2] == 1) {
        result_player3.innerHTML = "<span></span>";
        flag[2] = 0;
    }
    fun();
    flag4 = 1;
}
start[3].onclick = function () {
    if (flag[3] == 1) {
        result_player4.innerHTML = "<span></span>";
        flag[3] = 0;
    }
    fun();
    flag5 = 1;
}

stop1[0].onclick = function () {
    if (flag3 == 1 || flag4 == 1 || flag5 == 1) {
        alert("请在你所在的玩家位置按停止键,本轮结果不算数");
    }
    fun2();
    result_player1.innerHTML = "<span>" + result + "</span>";
    flag[0] = 1;
    flag2 = 0;
}
stop1[1].onclick = function () {
    if (flag2 == 1 || flag4 == 1 || flag5 == 1) {
        alert("请在你所在的玩家位置按停止键，本轮结果不算数");
    }
    fun2();
    result_player2.innerHTML = "<span>" + result + "</span>";
    flag[1] = 1;
    flag3 = 0;
}
stop1[2].onclick = function () {
    if (flag2 == 1 || flag3 == 1 || flag5 == 1) {
        alert("请在你所在的玩家位置按停止键，本轮结果不算数");
    }
    fun2();
    result_player3.innerHTML = "<span>" + result + "</span>";
    flag[2] = 1;
    flag4 = 0;
}
stop1[3].onclick = function () {
    if (flag2 == 1 || flag3 == 1 || flag4 == 1) {
        alert("请在你所在的玩家位置按停止键，本轮结果不算数");
    }
    fun2();
    result_player4.innerHTML = "<span>" + result + "</span>";
    flag[3] = 1;
    flag5 = 0;
}
//碗的逻辑
var flagtime;
var oldinner;
var num;
num = new Array(6);

function init() {
    pic1.src = "pic/dice_pic1.jpg";
    pic2.src = "pic/dice_pic2.jpg";
    pic3.src = "pic/dice_pic3.jpg";
    pic4.src = "pic/dice_pic4.jpg";
    pic5.src = "pic/dice_pic5.jpg";
    pic6.src = "pic/dice_pic6.jpg";
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
    pic1.src = "pic/dice_pic" + arr[0] + ".jpg";
    pic2.src = "pic/dice_pic" + arr[1] + ".jpg";
    pic3.src = "pic/dice_pic" + arr[2] + ".jpg";
    pic4.src = "pic/dice_pic" + arr[3] + ".jpg";
    pic5.src = "pic/dice_pic" + arr[4] + ".jpg";
    pic6.src = "pic/dice_pic" + arr[5] + ".jpg";
    flagtime = setTimeout("fun()", 100);
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
}