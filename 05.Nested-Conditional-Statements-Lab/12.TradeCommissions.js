function calculateCommission(city, sales) {
    let commission = 0;

    if (sales < 0) {
        console.log("error");
        return;
    }

    switch(city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) commission = 0.05;
            else if (sales > 500 && sales <= 1000) commission = 0.07;
            else if (sales > 1000 && sales <= 10000) commission = 0.08;
            else if (sales > 10000) commission = 0.12;
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) commission = 0.045;
            else if (sales > 500 && sales <= 1000) commission = 0.075;
            else if (sales > 1000 && sales <= 10000) commission = 0.10;
            else if (sales > 10000) commission = 0.13;
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) commission = 0.055;
            else if (sales > 500 && sales <= 1000) commission = 0.08;
            else if (sales > 1000 && sales <= 10000) commission = 0.12;
            else if (sales > 10000) commission = 0.145;
            break;
        default:
            console.log("error");
            return;
    }

    let result = sales * commission;
    console.log(result.toFixed(2));
}

// Примерни извиквания на функцията
calculateCommission("Sofia", 1500);    // Очакван изход: 120.00
calculateCommission("Plovdiv", 499.99); // Очакван изход: 27.50
calculateCommission("Varna", 3874.50); // Очакван изход: 387.45
calculateCommission("Kaspichan", -50);  // Очакван изход: error
