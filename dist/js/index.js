"use strict";
let y = 10;
y = 16;
console.log(y);
let x = 10;
x = 16;
console.log(x);
let firstName = "Gabriel";
let age = 30;
const isAdmin = true;
const myNumbers = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
let a = 0;
a = "teste";
a = true;
a = [];
console.log(a);
let id = "10";
id = 200;
console.log(id);
const userId = 10;
const productId = "00001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
let usuarioStatus;
usuarioStatus = "autenticado";
usuarioStatus = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Gabriel"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("José", "Sr.");
;
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 1, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
    }
    console.log("Não foi passado um número");
}
;
doSomething(5);
doSomething(true);
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
;
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItens(a1);
showArrayItens(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    ;
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O papel do usuário é ${this.role}`);
        }
        console.log("Informação restrita");
    }
}
;
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
zeca.showUserRole(true);
;
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    ;
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
;
const fusca = new Car("VW", 4);
fusca.showBrand();
class Supercar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
;
const a4 = new Supercar();
