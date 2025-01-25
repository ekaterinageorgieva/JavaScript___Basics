function planVacation(budget, season) {
    let destination = "";
    let accommodation = "";
    let spentMoney = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            accommodation = "Camp";
            spentMoney = budget * 0.30;
        } else if (season === "winter") {
            accommodation = "Hotel";
            spentMoney = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            accommodation = "Camp";
            spentMoney = budget * 0.40;
        } else if (season === "winter") {
            accommodation = "Hotel";
            spentMoney = budget * 0.80;
        }
    } else {
        destination = "Europe";
        accommodation = "Hotel";
        spentMoney = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${spentMoney.toFixed(2)}`);
}


planVacation(50, "summer");
planVacation(75, "winter");
planVacation(312, "summer");
planVacation(678.53, "winter");
planVacation(1500, "summer");
