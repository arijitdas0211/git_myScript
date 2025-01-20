let myPromise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("First step complete.");
    } else {
        reject("Something went wrong.");
    }
});

myPromise
.then(function(result) {
    console.log(result);
    return "Next step complete.";   // Returns new promise.
})
.then(function(nextResult) {
    console.log(nextResult);    // Outputs: "Next step complete."
})
.catch(function(error) {
    console.log(error);     // Handles any error in the chain.
});

