function mul(a,b) {
    console.log(a*b)
}

function mul(a, b, c) {
    console.log(a * b * c)
}

mul(6, 5); // NaN
mul(10, 20, 30); // 6000

/*
 * JavaScript does not support function overloading, because when we try to declare multiple fucntions with different number of parameters, it will consider only last declared function and all other functions will be useless/ignored.
*/
