var arr1 = [10, 20, 30, 40];

var arr2 = [10, 50.45, true, 'Kod', { name: 'Priya', age: 45 }, () => { console.log('Function') }, [100, 200]];

for (let i = 0; i < arr1.length; i++) {
    console.log(`Element at index: ${i} , value: ${arr1[i]}`);
}

for (let i = 0; i < arr2.length; i++) {
    console.log(`Element at index: ${i} , value: ${arr2[i]}`);
}

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
