/**
 * Created by tangjianfeng on 2017/3/11.
 */


let xx = 345;

function tep() {
    this._p = {}
}
tep.prototype.a = function () {
    console.log(3)
}

function tap() {
    tep.call(this)
}
tap.prototype = Object.create(tep.prototype);

let t = new tap();
