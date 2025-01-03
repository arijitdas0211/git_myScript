function add() {
    console.log(arguments[0], arguments[1], arguments[2]);
}

// add();      // undefined undefined undefined
// add(10);    // 10 undefined undefined
// add(10, 20); // 10 20 undefined
// add(10, 20, 30); // 10 20 30
// add(10, 20, 'Priya', 25); // 10 20 30

function mul() {
    if (arguments.length < 2 || arguments.length > 4) {
        console.log("Multiplication can not be performed!");
    } else if (arguments.length >= 2 && arguments.length <= 4) {
        let x = 1;
        for (let i = 0; i < arguments.length; i++) {
            x = x * arguments[i];
        }
        console.log(`Multiplication:`,x);
    } else {
        console.log("Invalid Arguments");
    }
}

mul(1);
mul(1, 2);
mul(1, 2, 3);
mul(1, 2, 3, 4);
mul(1, 2, 3, 4, 5);

//  ** Argument object can not be used with arrow functions, filter, map, reduce, forEach.
