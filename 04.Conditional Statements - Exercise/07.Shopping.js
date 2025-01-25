function shopping(budget, videoCardsCount, processorsCount, ramCount) {
    const videoCardPrice = 250;

<<<<<<< HEAD
    const totalVideoCardsPrice = videoCardsCount * videoCardPrice;

    const processorPrice = totalVideoCardsPrice * 0.35;
    const totalProcessorsPrice = processorsCount * processorPrice;

    const ramPrice = totalVideoCardsPrice * 0.10;
    const totalRamPrice = ramCount * ramPrice;

    let totalPrice = totalVideoCardsPrice + totalProcessorsPrice + totalRamPrice;

    if (videoCardsCount > processorsCount) {
        totalPrice *= 0.85; 
    }

    const difference = budget - totalPrice;

=======
    // Обща цена за видеокарти
    const totalVideoCardsPrice = videoCardsCount * videoCardPrice;

    // Цената за един процесор е 35% от общата цена за видеокартите
    const processorPrice = totalVideoCardsPrice * 0.35;
    const totalProcessorsPrice = processorsCount * processorPrice;

    // Цената за една RAM памет е 10% от общата цена за видеокартите
    const ramPrice = totalVideoCardsPrice * 0.10;
    const totalRamPrice = ramCount * ramPrice;

    // Сумираме общата цена
    let totalPrice = totalVideoCardsPrice + totalProcessorsPrice + totalRamPrice;

    // Прилагаме 15% отстъпка, ако броят на видеокартите е по-голям от този на процесорите
    if (videoCardsCount > processorsCount) {
        totalPrice *= 0.85; // прилагаме 15% отстъпка
    }

    // Изчисляваме разликата между бюджета и общата цена
    const difference = budget - totalPrice;

    // Отпечатваме резултата
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
    if (difference >= 0) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(difference).toFixed(2)} leva more!`);
    }
}

shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);