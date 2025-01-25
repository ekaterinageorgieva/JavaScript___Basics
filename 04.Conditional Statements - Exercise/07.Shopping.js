function shopping(budget, videoCardsCount, processorsCount, ramCount) {
    const videoCardPrice = 250;

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

    if (difference >= 0) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(difference).toFixed(2)} leva more!`);
    }
}

shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);