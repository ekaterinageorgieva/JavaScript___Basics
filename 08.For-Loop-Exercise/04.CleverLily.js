function birthdaySavings(age, washingMachinePrice, toyPrice) {
    let totalMoney = 0; // Общата сума спестени пари
    let totalToys = 0; // Общият брой играчки
    let moneyGift = 10; // Сумата за първия четен рожден ден
    let brotherTakes = 0; // Братът взема по 1 лев при четни години

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            // Четна година -> получава пари
            totalMoney += moneyGift;
            moneyGift += 10; // Увеличаваме сумата за следващия четен рожден ден
            brotherTakes += 1; // Братът взема 1 лев
        } else {
            // Нечетна година -> получава играчка
            totalToys++;
        }
    }

    // Добавяме парите от продадените играчки
    totalMoney += totalToys * toyPrice;

    // Изваждаме парите, взети от брат ѝ
    totalMoney -= brotherTakes;

    // Проверяваме дали парите са достатъчни
    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}

birthdaySavings(10, 170.00, 6);
