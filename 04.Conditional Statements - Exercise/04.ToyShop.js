function toyShop(tripPrice, puzzles, dolls, bears, minions, trucks) {
    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let totalToys = puzzles + dolls + bears + minions + trucks;
    let totalPrice = (puzzles * puzzlePrice) + (dolls * dollPrice) + (bears * bearPrice) + (minions * minionPrice) + (trucks * truckPrice);

    if (totalToys >= 50) {
        totalPrice *= 0.75;
    }

    totalPrice *= 0.90;

    let difference = totalPrice - tripPrice;

    if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(difference).toFixed(2)} lv needed.`);
    }
}

// Example usage:
toyShop(320, 8, 2, 5, 5, 1);
