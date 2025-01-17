/**
 * Compile time errors - Syntax errors
 * Runtime errors - Logical errors
 * Exception handling is the process where we can handle sudden termination of the code.
 * 
 */

try {
    // code that might throw an error.
} catch {
    // code to handle the error.
} finally {
    // Optional block to execute after try or catch.
}
// ************************************************************
// ************************************************************

function add() {
    console.log("This function will perform add operation");
}
add();
function task() {
    console.log(z);
}
try {
    task();
} catch {
    console.log("Some error occured in task() function and handled.");
}
console.log("Task 3");
console.log("Task 4");
