/*
1.WAP to display addition of numbers 
(numbers will be passed to a function as an argument at the time of 
calling of function.)
For e.g: add(10,20), add(50,60,70), add(), add(10)

2.WAP to find sum of array elements using reduce(): and explain it.

3.Mention Function names for below operations:
    a. Add ele at the end of an array :
    b. Removes ele from  the 0th index :
    c. Creating sub array without changing original array :
    d. Checking index of specific element value: 
    e. Checking wther element is present in an array or not: 
*/
// Define lexical scope and explain it wth the help of example.

/*  Solutions:------------ */
// 1. 
function add(...args) {
    if (args.length == 0) console.log("Invalid Arguments.");

    let res = args.reduce((acc, elem) => acc + elem, 0);
    console.log("Addition is:", res);
}

// add(10);
// add();
// add(20, 30);
// add(50, 60, 70);

// 2. 
let arr = [10, 20, 50, 70, 80];
function arrAdd() {
    let res = arr.reduce((acc, elem) => acc + elem, 0);
    console.log("Addition is:", res);
}

arrAdd();

// 3. 
/**
 * a. push()
 * b. shift()
 * c. slice()
 * d. indexOf()
 * e. includes()
 */

// 4. 
/**
 * 
 */