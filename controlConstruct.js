// If-else
if (age > 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible.");
}

// Switch case
let day = "tuesday";

switch (day) {
    case "monday":
        console.log("It's starting of the week.");
        break;
    case "tuesday":
        console.log("It's tuesday");
        break;
    case "default":
        console.log("Another day.")
}

// for loop
for (var i=0; i<=10; i++) {
    console.log(i);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log("Count is:", count);
    count++;
}

// do while loop
let count1 = 1;
do {
    console.log("Count is:", count);
    count1++;
} while (count1 <= 3);

// for of loop



// for in loop



// forEach() loop
var arr3 = [10, 20, 30, 40];
arr3.forEach((elem, ind, complete_arr) => {
    console.log(elem, ind, complete_arr);
});

// break;
for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue;
for (var i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// 