function printNumbersDivisibleByNine(start, end) {
    let sum = 0;
    let numbers = [];

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            numbers.push(i);
        }
    }

    console.log(`The sum: ${sum}`);
    for (let number of numbers) {
        console.log(number);
    }
}

printNumbersDivisibleByNine(100, 200);
