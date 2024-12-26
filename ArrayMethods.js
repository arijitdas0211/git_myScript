var arr = [40, 50, 60, 11, 22, 33, 44];

// For Even Numbers
console.log("Even Numbers: ");
for (var i=0; i<arr.length; i++) {
    if (arr[i]%2 === 0) {
        console.log(arr[i]);
    }
}

// For Odd Numbers
console.log("Odd Numbers: ");
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

var arr2 = [1, 2, 3, 5, 26];
console.log("Original Array: ", arr2);

// Appends element at the end of the array.
arr2.push(500);
console.log("After push 500: ", arr2);

// Appends element at the beginning of the array.
arr2.unshift(7);
console.log("After unshift 7: ", arr2);
