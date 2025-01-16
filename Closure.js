function outer() {
    let count = 0;

    return {
        increment() {
            console.log(++count);
        },
        decrement() {
            console.log(--count);
        },
        reset() {
            count = 0;
            console.log(count);
        }
    }
}

let counter = outer();
counter.increment();
counter.decrement();
counter.reset();
