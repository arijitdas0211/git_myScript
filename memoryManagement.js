console.log(a); // undefined
var a = 20;
console.log(a); // 20

/* 
Using var keyword, it will not produce error in line no. 1, rather it will output undefined. But, while using let and const keyword it will produce reference error.
*/

/*
console.log(a); // Error
let a = 20;
console.log(a); // 20
*/

/* 
console.log(a); // Error
const a = 20;
console.log(a); // 20
*/

/*----*/
// Memory allocation phase
// Code execution phase

add(); // It will execute and results 30.
function add() {
    console.log(10+20);
}

