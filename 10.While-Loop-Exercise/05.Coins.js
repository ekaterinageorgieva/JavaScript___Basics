function vendingMachineChange(amount) {
    let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let coinCount = 0;

    amount = Math.round(amount * 100) / 100;

    for (let coin of coins) {
        while (amount >= coin) {
            amount = (amount - coin).toFixed(2);
            coinCount++;
        }
    }

    console.log(coinCount);
}


vendingMachineChange(1.23); 
vendingMachineChange(2);    
vendingMachineChange(0.56);
vendingMachineChange(2.73);