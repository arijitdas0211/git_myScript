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

console.log("\n========================================\n");

var arr2 = [1, 2, 3, 5, 26];
console.log("Original Array: ", arr2);

// Appends element at the end of the array.
arr2.push(500);
console.log("After push 500: ", arr2);

// Appends element at the beginning of the array.
arr2.unshift(7);
console.log("After unshift 7: ", arr2);

console.log("\n========================================\n");

// Remove element from the end of the array.
arr.pop();
console.log("After pop the last element: ", arr2);

// Remove first element (0th index) of the array.
arr2.shift();
console.log("After shift: ", arr2);

// splice(start index, deleteCount, Elements to be added).
console.log("Apllying splice: ", arr2.splice(1, 2, 50, 60, 70, 80));
console.log("After splice: ", arr2);
// splice method removes count of elements from the particular index and appends new elements in the place of removed elements.

arr3 = [100, 200, 300, 400, 500];
// slice(startIndex, lastIndex = index-1).
console.log(arr3.slice(1, 3));  // returns element of index 1 to index (3-1) = 2.

console.log("\n========================================\n");

// indexOf(): Returns index of specific element.
console.log(arr3.indexOf(300));

// includes(): Returns element is present in the array or not.
console.log(arr3.includes(400)); // Returns true.

console.log("\n========================================\n");

arr4 = ['z', 'a', 'x', 'k'];
// sort(): Sorts the original String Array (Only Strings).
console.log("After Sorting: ", arr4.sort());

// reverse(): Reverse the original String Array (Only Strings).
console.log("After Reverse: ", arr4.reverse());

// concat(): Merge two arrays.
let num1 = [1,2,3,4];
let num2 = [50, 20, 80];
let newArr = num1.concat(num2);
console.log(newArr);

// join(): Joins string elements from an array.
var names = ['a', 'p', 'p', 'l', 'e'];
let fruitName = names.join('');
console.log(fruitName);

console.log("\n========================================\n");

// Unpacking Array.
let users = ['akash', 'ankit', 'punith', 'ayush'];
let [user1, user2] = users;
console.log(user1); // Returns akash.
console.log(user2); // Returns ankit.

console.log("\n========================================\n");

