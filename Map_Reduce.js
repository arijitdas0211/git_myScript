var array = [1,2,3,4,5,6];

// var sqArr = array.map(function(elem) {
//     return elem*elem;
// })

// map():
var sqArr = array.map((elem)=>elem*elem);

console.log("Original array: ", array);
console.log("Squared array: ", sqArr);


// The fucntion which is passed as an arguement is called a callback function.
// Example: Arrow function


// reduce():
let arr = [1,2,3,4];

// var sum = arr.reduce(function(acc, elem) {
//     return elem + acc;
// }, 0);

var sum = arr.reduce((acc, elem)=> acc + elem , 0);  // 0 + elem.
console.log("Sum is: ", sum);

var product = arr.reduce((acc, elem) => acc * elem, 1);  // 1 * elem.
console.log("Product is: ", product);
