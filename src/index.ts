// Tipagem

// Inferencia

let y = 10;
y = 16;
console.log(y);

// Annotation

let x:number = 10;
x = 16;
console.log(x);

// Tipos básicos

let firstName: string = "Gabriel";
let age: number = 30;
const isAdmin: boolean = true;

// Object

const myNumbers: number[] = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);

// Tuplas

let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];

// Object literals -> {prop: value}

const user: { name: string; age: number } = {
    name: "Pedro",
    age: 18,
};

console.log(user);

// Any (Considerado má pratica)

let a: any = 0;
a = "teste";
a = true;
a = [];

console.log(a);

// Union Types (Pode ter varios tipos definidos pelo dev)

let id: string | number = "10";
id = 200;
console.log(id);

// Type Alias

type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// Enum

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);

// Literal types (o valor da variável não podera ser alterado)

let usuarioStatus: "autenticado" | null;

// usuarioStatus = "outrovalor" (Não funciona)
usuarioStatus = "autenticado";
usuarioStatus = null;

// Funções

function sum(a:number, b: number) {
    return a+b;
}

console.log(sum(12, 12));

// definindo um tipo de retorno na função

function sayHelloTo(name:string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Gabriel"));

// função que não retona nada - void

function logger(msg:string): void {
    console.log(msg);
}

logger("Teste!");

// função comparâmetro opcional

function greeting(name:string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("José", "Sr.");

// Interfaces

interface MathFunctionParams {
    n1: number;
    n2: number;
};

function sumNumbers(nums:MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums:MathFunctionParams) {
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 1, n2:2 }));

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
};

console.log(multiplyNumbers(someNumbers));

// Narrowing (Checagem de tipos)

function doSomething(info:number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
    }
    console.log("Não foi passado um número");
};

doSomething(5);
doSomething(true);

// Generics

function showArrayItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
};

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItens(a1);
showArrayItens(a2);

// Classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: String, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    };

    // Metodos
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`O papel do usuário é ${this.role}`);
        }
        console.log("Informação restrita");
    }
};

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
zeca.showUserRole(true);

// Interfaces em Classes

interface IVehicle {
    brand: string
    showBrand(): void
};

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    };

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
};

const fusca = new Car("VW", 4);

fusca.showBrand();

// Herança

class Supercar extends Car {
    engine
    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
};

