var btn1 = document.getElementById('btn1');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var pic4 = document.getElementById('pic4');
var pic5 = document.getElementById('pic5');
var pic6 = document.getElementById('pic6');
var result_player1 = document.querySelector('.output_player1');
btn1.onclick = function() {
    window.location.href = 'pg1.html';
}
var flag = 1;
var start = document.getElementById('start');
var pause = document.getElementById('pause');
start.onclick = function() {
    if (flag == 1) {
        result_player1.innerHTML = "<span></span>";
        fun();
        flag = 0;
    }
}
pause.onclick = function() {
    if (flag == 0) {
        fun2();
        flag = 1; 
    }
}

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
            result_player1.innerHTML = "<span>状元-红六勃</span>";
        else if (num[3] == 5)
            result_player1.innerHTML = "<span>状元-五红</span>";
        else if (num[0] == 2)
            result_player1.innerHTML = "<span>状元-插金花</span>";
        else
            result_player1.innerHTML = "<span>状元-四红</span>";
    } else if (num[0] == 6)
        result_player1.innerHTML = "<span>状元-遍地锦</span>";
    else if (num[1] == 6 || num[2] == 6 || num[4] == 6 || num[5] == 6)
        result_player1.innerHTML = "<span>状元-黒六勃</span>";
    else if (num[0] == 5 || num[1] == 5 || num[2] == 5 || num[4] == 5 || num[5] == 5)
        result_player1.innerHTML = "<span>状元-五子登科</span>";   
    else {
        for (var i = 0; i < 6; i++) {
            if (num[i] == 4)
                sijin = 1;
        }
        if (sijin == 1)
            result_player1.innerHTML = "<span>进士-四进</span>";
        else if (num[0] == 1 && num[1] == 1 && num[2] == 1 && num[3] == 1 && num[4] == 1 && num[5] == 1)
            result_player1.innerHTML = "<span>榜眼-对堂</span>";
        else if (num[3] == 3)
            result_player1.innerHTML = "<span>探花-三红</span>";
        else if (num[3] == 2)
            result_player1.innerHTML = "<span>举人-二举</span>";
        else if (num[3] == 1)
            result_player1.innerHTML = "<span>秀才-一秀</span>";
        else
            result_player1.innerHTML = "<span>哎呀，再博一次吧</span>";
    }
}