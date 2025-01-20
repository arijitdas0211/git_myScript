/**
 * Pending: 
 * Resolve: then()
 * Reject:  catch()
 * 
 */
let p1 = new Promise(()=> {
    setTimeout(()=> {
        console.log('Promise Executed');
    }, 5000)
})
