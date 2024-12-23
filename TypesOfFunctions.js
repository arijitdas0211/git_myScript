//Function Declaration: Hoisted
function greet1(name) {
    return `Hello,${name}`
}
console.log(greet1('Priya'))

//Function Expression: Not Hoisted
let greet2 = function (name) {
    return `Hello,${name}`
}
console.log(greet2('Ankit'))

//Arrow Function: Callbacks
let greet3 = (name) => {
    return `Hello,${name}`
}
console.log(greet3('Abhi'))
