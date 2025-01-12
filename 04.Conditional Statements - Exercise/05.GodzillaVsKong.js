function godzillaVsKong(budget, extras, pricePerClothing) {
    let decorCost = budget * 0.10;
    let clothingCost = extras * pricePerClothing;

    if (extras > 150) {
        clothingCost *= 0.90;
    }

    let totalCost = decorCost + clothingCost;

    if (totalCost > budget) {
        let neededMoney = totalCost - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalCost;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

// Example usage:
godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);