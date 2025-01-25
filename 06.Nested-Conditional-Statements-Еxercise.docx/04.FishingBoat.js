function fishingBudget(budget, season, numberOfFishermen) {
    let boatPrice;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
    }

    if (numberOfFishermen <= 6) {
        boatPrice *= 0.9;
    } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11) {
        boatPrice *= 0.85;
    } else if (numberOfFishermen >= 12) {
        boatPrice *= 0.75;
    }

    if (numberOfFishermen % 2 === 0 && season !== "Autumn") {
        boatPrice *= 0.95;
    }

    let moneyLeft = budget - boatPrice;

    if (moneyLeft >= 0) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(moneyLeft).toFixed(2)} leva.`);
    }
}


fishingBudget(3000, "Summer", 11);
fishingBudget(3600, "Autumn", 6);