let arr = [10,20,30,40,50,65];

// for (let i=0; i<arr.length; i++) {
//     console.log("Index: ",i,"Element: ",arr[i]);
// }

console.log("\n========================================\n");

// Using forEach function.
arr.forEach(function(element, index) {
    console.log(element, index);
});

console.log("\n========================================\n");

// filter(): 
let nums = [10, 23, 37, 40, 50, 65];
let odd = nums.filter((elem) => elem%2 !== 0);
console.log("Odd Numbers are: ", odd);

// map():
