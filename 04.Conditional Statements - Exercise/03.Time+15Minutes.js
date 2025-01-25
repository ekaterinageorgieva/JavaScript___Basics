function timePlus15Minutes(hours, minutes) {
<<<<<<< HEAD
   
    minutes += 15;

=======
    // Добавяме 15 минути
    minutes += 15;

    // Проверка дали минутите надвишават 60
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

<<<<<<< HEAD
=======
    // Проверка дали часовете надвишават 24
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
    if (hours >= 24) {
        hours = 0;
    }

<<<<<<< HEAD
=======
    // Форматиране на изхода
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

<<<<<<< HEAD
timePlus15Minutes(1, 46);
timePlus15Minutes(0, 1);  
timePlus15Minutes(23, 59)
timePlus15Minutes(11, 8)
timePlus15Minutes(12, 49)
=======
// Тестови примери
timePlus15Minutes(1, 46);  // 2:01
timePlus15Minutes(0, 1);   // 0:16
timePlus15Minutes(23, 59); // 0:14
timePlus15Minutes(11, 8);  // 11:23
timePlus15Minutes(12, 49); // 13:04
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
