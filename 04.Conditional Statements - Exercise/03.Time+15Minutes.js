function timePlus15Minutes(hours, minutes) {
    // Добавяме 15 минути
    minutes += 15;

    // Проверка дали минутите надвишават 60
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    // Проверка дали часовете надвишават 24
    if (hours >= 24) {
        hours = 0;
    }

    // Форматиране на изхода
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

// Тестови примери
timePlus15Minutes(1, 46);  // 2:01
timePlus15Minutes(0, 1);   // 0:16
timePlus15Minutes(23, 59); // 0:14
timePlus15Minutes(11, 8);  // 11:23
timePlus15Minutes(12, 49); // 13:04
