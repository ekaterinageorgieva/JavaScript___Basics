function sumOfTwoNumbers(start, end, magicNumber) {
    let combinationCount = 0;

    for (let firstNumber = start; firstNumber <= end; firstNumber++) {
        for (let secondNumber = start; secondNumber <= end; secondNumber++) {
            combinationCount++;

            if (firstNumber + secondNumber === magicNumber) {
                console.log(
                    `Combination N:${combinationCount} (${firstNumber} + ${secondNumber} = ${magicNumber})`
                );
                return;
            }
        }
    }

    console.log(
        `${combinationCount} combinations - neither equals ${magicNumber}`
    );
}


sumOfTwoNumbers(1, 10, 5);