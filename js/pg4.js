var btn1 = document.getElementById('btn1');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var pic4 = document.getElementById('pic4');
var pic5 = document.getElementById('pic5');
var pic6 = document.getElementById('pic6');
var result_player1 = document.querySelector('.output_player1');
var result_player2 = document.querySelector('.output_player2');
btn1.onclick = function() {
    window.open('pg1.html');
}
var flag = 0;
var start = document.querySelectorAll('#start');
var stop = document.querySelectorAll('#stop');
for (var i = 0; i < start.length; i++) {
    start[i].onclick = function() {
        if (flag == 1) {
            result_player1.innerHTML = "<span></span>";
            flag = 0;
        }
        fun();
    }
}
for (var i = 0; i < stop.length; i++) {
    stop[i].onclick = function() {
        fun2();
        init();
        flag = 1;
    }
}
var flagtime;
var oldinner;
var flag = 1;
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
            result_player1.innerHTML = "<span>hahaha1</span>";

        else if (num[0] == 2)
            result_player1.innerHTML = "<span>hahaha2</span>";
        else
            result_player1.innerHTML = "<span>hahahaha3</span>";
    } else {
        for (var i = 0; i < 6; i++) {
            if (num[i] == 4)
                sijin = 1;
        }
        if (sijin == 1)
            result_player1.innerHTML = "<span>hahahaha4</span>";
        else if (num[0] == 1 && num[1] == 1 && num[2] == 1 && num[3] == 1 && num[4] == 1 && num[5] == 1)
            result_player1.innerHTML = "<span>hahahaha5</span>";
        else if (num[3] == 3)
            result_player1.innerHTML = "<span>hahahaha6</span>";
        else if (num[3] == 2)
            result_player1.innerHTML = "<span>hahahaha7</span>";
        else if (num[3] == 1)
            result_player1.innerHTML = "<span>hahahaha8</span>";
        else
            result_player1.innerHTML = "<span>hahahaha9</span>";
    }
}