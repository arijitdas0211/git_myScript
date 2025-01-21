function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Placed");
            resolve();
        }, 5000)
    })
}

function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment Received");
            resolve();
        }, 2000)
    })
}

function confirmOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Confirmed");
            resolve();
        }, 2000)
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email has been sent Successfully");
            resolve();
        }, 1000)
    })
}


// placeOrder()
// .then(async () => await makePayment())
// .then(async () => await confirmOrder())
// .then(async () => await sendEmail())
// .then(() => console.log("PROCESS ENDED."))
// .catch((err) => console.log(err))

async function processOrder() {
    console.log("Process Started");
    await placeOrder();
    await makePayment();
    await confirmOrder();
    await sendEmail();
    console.log("PROCESS ENDED.")
}
processOrder();

console.log("OTHER TASK");
