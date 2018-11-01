//数组去重

Array.prototype.myUnique = function myUnique(ary) {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (obj.hasOwnProperty(item)) {
            this[i] = this[this.length - 1];
            this.pop();
            i--;
            continue;
        }
        obj[item] = item;
    }
    obj = null; //优化
    return this;
};
var ary = [16, 55, 78, 52, 16, 55, 55];

var max=ary.myUnique().sort(function (a,b){
    return a-b;
}).pop();
console.log(max);
