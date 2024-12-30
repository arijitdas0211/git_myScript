let years = [2000, 1996, 1994, 1997];

let leapYear = years.filter((elem)=> {
    if ((elem % 400 === 0) && (elem % 100 !== 0) || (elem % 4 ===0)) {
        console.log(elem, "is leap year");
    }
})
