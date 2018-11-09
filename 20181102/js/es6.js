class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(1);
    }
    running(){
        console.log(2);
    }
}
let p = new Person('小王', 18);
p.say();
p.running();
console.log(p);