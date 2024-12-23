// 4 types of functions:

// Functions without input without return
function add() {
    var a = 20;
    var b = 10;
    console.log(a+b);
}
add();

// Funtions with input without return
function sub(x, y) {
    console.log(x-y);
    
}
sub(200, 100);

// Funtions without input with return
function prod() {
    var a = 300;
    var b = 100;
    return a * b;
}
let result = prod();
console.log(result);

// Funtions with input with return
function quotient(a, b) {
    return a/b;
}
let result1 = quotient(200, 100);
console.log(result1);
