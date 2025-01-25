function sumOfDigits(n) {
    let sum = 0;
    for (let digit of n) {
        sum += Number(digit);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfDigits("1234");
sumOfDigits("564891");
