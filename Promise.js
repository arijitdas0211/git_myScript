/**
 * Pending: 
 * Resolve: then()
 * Reject:  catch()
 * 
 */
// let p1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log('Logic to fetch the data: success');
//         resolve('Priya: 12345');
//     }, 5000)
// })

// p1.then((data)=> {
//     console.log('Process the received data: ', data);
// });


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Logic to fetch the data: failure');
        reject();
    }, 5000)
})

p1.then((data) => {
    console.log('Process the received data: ', data);
}).catch(()=> {
    console.log("Error occured while fetching the data.")
})

