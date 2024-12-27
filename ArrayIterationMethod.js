let arr = [10,20,30,40,50,65];

for (let i=0; i<arr.length; i++) {
    console.log("Index: ",i,"Element: ",arr[i]);
}

console.log("\n========================================\n");

// Using forEach function.
arr.forEach(function(element, index) {
    console.log(element, index);
});