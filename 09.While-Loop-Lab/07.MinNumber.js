function findMinNumber(inputs) {
    let minNumber = null;
    let i = 0;

    while (i < inputs.length) {
        let userInput = inputs[i];
        i++;

        if (userInput === "Stop") {
            break;
        }

        const number = Number(userInput);

        if (!isNaN(number)) {
            if (minNumber === null || number < minNumber) {
                minNumber = number;
            }
        }
    }

    console.log(minNumber);
}

findMinNumber(["100", "99", "80", "70", "Stop"])