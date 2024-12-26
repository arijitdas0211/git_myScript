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
