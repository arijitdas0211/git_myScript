let p1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        resolve();
    }, 5000)
})

function process() {
    console.log('Task 1');
    p1.then(()=> console.log('Task 2'));        // This is under pending state for 5 secs.
    console.log('Task 3 depends on Task 2 (executed first)');
}
process();

console.log('Some other tasks');
