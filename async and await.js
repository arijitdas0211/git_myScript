let p1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log("Task 2");
        resolve();
    }, 5000)
})

async function process() {
    console.log('Task 1');
    // p1.then(()=> console.log('Task 2'));        // This is under pending state for 5 secs.
    await p1;       // Pending state.
    console.log('Task 3 depends on Task 2 (executed first)');   // After above pending state is resolved, then this line will execute.
}
process();

console.log('Some other tasks');

/**
 * All the instructions which are present inside the function
after promise they should wait for promise to resolve or reject.

 * But the Intructions which are outside the functions should
not wait for promise to resolve or reject.
 */
