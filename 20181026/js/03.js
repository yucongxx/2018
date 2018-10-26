function fn() {
    var a = 5;
    return function fn1() {
        console.log(a);
    }
}
let f = fn();
console.dir(fn);