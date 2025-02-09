function specialNumbers(n) {
    n = Number(n); // Преобразуваме входа към число
    let result = "";

    for (let num = 1111; num <= 9999; num++) {
        let isSpecial = true; // Флаг за проверка дали числото е "специално"
        let digits = num.toString().split("").map(Number); // Разделяме числото на цифри

        for (let digit of digits) {
            if (digit === 0 || n % digit !== 0) { // Проверяваме дали делението на n на текущата цифра е без остатък
                isSpecial = false; // Ако не е, числото не е "специално"
                break; // Излизаме от цикъла
            }
        }

        if (isSpecial) {
            result += num + " "; // Добавяме "специалното" число към резултата
        }
    }

    console.log(result.trim()); // Отпечатваме резултата без излишни интервали
}

specialNumbers(3);