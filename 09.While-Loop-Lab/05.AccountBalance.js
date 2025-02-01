function accountBalance(transactions) {
    let total = 0; // Инициализираме баланса
    
    for (let i = 0; i < transactions.length; i++) {
        let currentTransaction = transactions[i];
        
        if (currentTransaction === "NoMoreMoney") {
            break;
        }
        
        let amount = Number(currentTransaction);
        
        if (amount < 0) {
            console.log("Invalid operation!");
            break; 
        }
        
        total += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
    }
    
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);

