module.exports = function (num) {
    var sijin = 0;
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
    return result;
}