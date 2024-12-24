// Function Declaration
function add(a, b) {
    console.log(a+b);
}
add(200, 100);

// Function expression
const sub = function(a,b) {
    console.log(a-b);
}
sub(200,100);

// Arrow Function
const mul = (a,b) => {
    console.log(a * b);
}
mul(10, 20);

const msg = ()=> "Hello World!";
let res = msg();
console.log(res);
