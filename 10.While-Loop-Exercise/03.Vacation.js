function vacationSaving(input) {
    let moneyNeeded = Number(input[0]);
    let currentMoney = Number(input[1]);

    let daysCounter = 0;
    let spendDays = 0;

    let i = 2;
    while (currentMoney < moneyNeeded) {
        let action = input[i];
        let amount = Number(input[i + 1]);
        daysCounter++;

        if (action === "spend") {
            currentMoney -= amount;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
            spendDays++;
        } else if (action === "save") {
            currentMoney += amount;
            spendDays = 0;
        }

        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(`${daysCounter}`);
            return;
        }

        i += 2;
    }

    console.log(`You saved the money for ${daysCounter} days.`);
}


vacationSaving(["2000", "1000", "spend", "1200", "save", "2000"]);
vacationSaving(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);

