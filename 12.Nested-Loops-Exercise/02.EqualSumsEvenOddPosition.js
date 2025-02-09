function findEqualSumsNumbers(start, end) {
    let result = []; // Масив за числата, които отговарят на условието

    for (let num = start; num <= end; num++) {
        let numStr = num.toString(); // Преобразуваме числото в текст, за да можем да достъпим всяка цифра
        let oddSum = 0; // Сума на цифрите на нечетни позиции
        let evenSum = 0; // Сума на цифрите на четни позиции

        for (let i = 0; i < numStr.length; i++) {
            let digit = parseInt(numStr[i]); // Преобразуваме текущата цифра в число

            if ((i + 1) % 2 === 0) {
                // Ако позицията е четна
                evenSum += digit;
            } else {
                // Ако позицията е нечетна
                oddSum += digit;
            }
        }

        if (oddSum === evenSum) {
            result.push(num); // Ако сумите са равни, добавяме числото към резултата
        }
    }

    console.log(result.join(" ")); // Отпечатваме резултата, разделен с интервал
}


findEqualSumsNumbers(100000, 100050);
