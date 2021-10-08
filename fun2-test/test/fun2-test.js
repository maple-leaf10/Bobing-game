const assert = require('assert');

const fun2 = require('../fun2');
var num = new Array(6);
describe('#fun2.js', () => {

    describe('#fun2()', () => {
        /*  num[0] = 1;
            num[1] = 2;
            num[2] = 1;
            num[3] = 0;
            num[4] = 1;
            num[5] = 1;
            it('fun2(1,2,3,3,5,6) should return 哎呀，再博一次吧', () => {
                assert.strictEqual(fun2(num), "哎呀，再博一次吧");
            });

        num[0] = 1;
        num[1] = 1;
        num[2] = 1;
        num[3] = 1;
        num[4] = 1;
        num[5] = 1;
        it('fun2(1,2,3,4,5,6) should return 榜眼-对堂', () => {
            assert.strictEqual(fun2(num), "榜眼-对堂");
        });

        num[0] = 0;
        num[1] = 0;
        num[2] = 0;
        num[3] = 6;
        num[4] = 0;
        num[5] = 0;
        it('fun2(4,4,4,4,4,4) should return 状元-红六勃', () => {
            assert.strictEqual(fun2(num), "状元-红六勃");
        });*/

        num[0] = 4;
        num[1] = 1;
        num[2] = 0;
        num[3] = 0;
        num[4] = 0;
        num[5] = 1;
        it('fun2(1,1,1,1,2,6) should return 进士-四进', () => {
            assert.strictEqual(fun2(num), "进士-四进");
        });
    });
});