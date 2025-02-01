function findMaxNumber(inputs) {
    let maxNumber = null;

    for (const userInput of inputs) {
        if (userInput === "Stop") {
            break;
        }

        const number = Number(userInput);

        if (!isNaN(number)) {
            if (maxNumber === null || number > maxNumber) {
                maxNumber = number;
            }
        }
    }

    console.log(maxNumber);
}

findMaxNumber(["100", "99", "80", "70", "Stop"]);