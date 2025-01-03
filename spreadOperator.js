const add = (...args) => {      // ...args -> means any number of arguments.
    let res = args.reduce((acc, elem) => acc + elem, 0);
    console.log("Addition is:", res);
}

// add(1);
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);



function mul (...args) {      // ...args -> means any number of arguments.
    let res = args.reduce((acc, elem) => acc * elem, 1);
    console.log("Multiplication is:",res);
}

// mul(1, 2);
mul(10, 5);
