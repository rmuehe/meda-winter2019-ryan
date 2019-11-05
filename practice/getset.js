let obj = {
    name : "Joe"
};

function Person (name) {
    this.name = name;
}

let dude1 = new Person ("Bob");
console.log(dude1.name);

console.log(obj.name);

let namesArr = Object.getOwnPropertyNames(obj);
console.log(namesArr);

let str = JSON.stringify(obj);
console.log(str);

let regEx = new RegExp (namesArr[0], "");
console.log(regEx);

let index = str.search(regEx);
console.log(index);

let funcObj = {"function":{"arguments":"a,b,c","body":"console.log(a*b+c);"}};

let funcObjStr = JSON.stringify(funcObj);
console.log(funcObjStr);

let parsed = JSON.parse(funcObjStr);
var f = new Function(parsed.function.arguments, parsed.function.body);

f(1,2,3);

let newFuncObj = {"function":{"arguments":"name","body":"this.name = name;"}};
let newFuncObjStr = JSON.stringify(newFuncObj);
console.log(newFuncObjStr);

let newParsed = JSON.parse(newFuncObjStr);
var G = new Function (newParsed.function.arguments, newParsed.function.body);

let dude2 = new G("Ralph");
console.log(dude2);
console.log(dude1);

G.name = "G";
console.log(G.name);

let someFuncObj = {"arguments":"name","body":"this.name = name;"};
let someFuncObjStr = JSON.stringify(someFuncObj);
console.log(someFuncObjStr);

let someFunc = JSON.parse(someFuncObjStr);
let Z = new Function (someFunc.arguments, someFunc.body);

// console.log(Z.name);
// Z = nameFunction(Z, "Z");
// console.log(Z.name);

let dude4 = new Z ("Xerxes");
console.log(dude4);
console.log(dude4.name);
console.log(Z);
console.log(Z.name);

class Dude{
    constructor (name) {
        this.name = name;
    } 
}  

let dude3 = new Dude("Charles");
console.log(dude3.name);

let X = class Named{
    constructor(name) {
        this.name = name;
    }
}

console.log(X.name);

// https://stackoverflow.com/questions/5905492/dynamic-function-name-in-javascript/50431242#50431242

const nameFunction = function (fn, name) {
    return Object.defineProperty(fn, 'name', {value: name, configurable: true});
};
  
let myFunc = function oldName () {};
console.log(myFunc.name); // oldName

myFunc = nameFunction(myFunc, 'newName');
console.log(myFunc.name); // newName
///////////////////////////////////////////////////////////

G = nameFunction(G, "G");
console.log(G.name);

let dude5 = new Z ("Mao");
console.log(Z.name);
Z = nameFunction(Z, "Z");
console.log(Z.name);

// let dude5 = new Z ("Mao");
console.log(dude5);
console.log(dude5.name);
console.log(Z);
console.log(Z.name);

console.log(someFuncObjStr);

let regExColon = new RegExp (':', "g");

console.log(someFuncObjStr.search(regExColon));

let endStr = someFuncObjStr.substring(13, someFuncObjStr.length);
console.log(endStr);

console.log(endStr.search(regExColon));

let prog = endStr.substring(15, endStr.length);
console.log(prog);
