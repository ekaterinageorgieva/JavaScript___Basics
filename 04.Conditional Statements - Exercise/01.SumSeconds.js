function sumSeconds(sec1, sec2, sec3) {
    // 1. Изчисляване на сбора от секундите
    let totalSeconds = sec1 + sec2 + sec3;

    // 2. Превръщане на секундите в минути и оставащи секунди
    let minutes = Math.floor(totalSeconds / 60);  // Целочислено деление на 60
    let seconds = totalSeconds % 60;              // Остатък при деление с 60

    // 3. Форматиране на резултата
    if (seconds < 10) {
        seconds = "0" + seconds;  // Добавяне на водеща нула, ако секундите са по-малки от 10
    }

    // 4. Отпечатване на резултата във формат "минути:секунди"
    console.log(`${minutes}:${seconds}`);
}

// Примерни извиквания на функцията
sumSeconds(35, 45, 44); // Резултат: 2:04
sumSeconds(22, 7, 34);  // Резултат: 1:03
sumSeconds(50, 50, 49); // Резултат: 2:29
sumSeconds(14, 12, 10); // Резултат: 0:36