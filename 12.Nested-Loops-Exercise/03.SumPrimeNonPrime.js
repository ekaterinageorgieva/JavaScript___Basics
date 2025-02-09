function sumPrimesAndNonPrimes(input) {
    let primeSum = 0; // Сума на простите числа
    let nonPrimeSum = 0; // Сума на непростите числа

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === "stop") {
            break; // Спира изпълнението при "stop"
        }

        let number = Number(command);

        if (number < 0) {
            console.log("Number is negative.");
            continue; // Пропуска текущата итерация за отрицателни числа
        }

        if (number === 1) {
            nonPrimeSum += number; // 1 не е просто число
            continue;
        }

        // Вътрешна функция за проверка дали числото е просто
        let isPrime = function(num) {
            if (num < 2) return false; // Числа под 2 не са прости
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    return false; // Ако има делител, не е просто число
                }
            }
            return true; // Ако не е намерен делител, числото е просто
        };

        if (isPrime(number)) {
            primeSum += number; // Добавяне към сумата на простите числа
        } else {
            nonPrimeSum += number; // Добавяне към сумата на непростите числа
        }
    }

    console.log("Sum of all prime numbers is: " + primeSum);
    console.log("Sum of all non prime numbers is: " + nonPrimeSum);
}

sumPrimesAndNonPrimes(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimesAndNonPrimes(["30", "83", "33", "-1", "20", "stop"]);
