var global = 200;
console.log("Value of Global is:", global);     // 200
// console.log("Value of outer is:", outer);       // error
// console.log("Value of inner is:", inner);       // error

function Outer() {
    var outer = 300;
    console.log("Value of outer is:", outer);       // 300
    console.log("Value of global is:", global);       // 200
    // console.log("Value of inner_variable:",inner_var);   // error

    function Inner() {
        var inner_var = 400;
        console.log("Value of outer is:", outer);       // 300
        console.log("Value of global is:", global);       // 200
        console.log("Value of i_v:",inner_var);         // error
    }
    Inner();
}
Outer();
