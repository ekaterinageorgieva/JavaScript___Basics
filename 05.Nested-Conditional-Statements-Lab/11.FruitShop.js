function calculateFruitPrice(fruit, day, quantity) {
    let price = 0;
    let isValid = true;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") price = 2.50;
        else if (fruit === "apple") price = 1.20;
        else if (fruit === "orange") price = 0.85;
        else if (fruit === "grapefruit") price = 1.45;
        else if (fruit === "kiwi") price = 2.70;
        else if (fruit === "pineapple") price = 5.50;
        else if (fruit === "grapes") price = 3.85;
        else isValid = false;
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") price = 2.70;
        else if (fruit === "apple") price = 1.25;
        else if (fruit === "orange") price = 0.90;
        else if (fruit === "grapefruit") price = 1.60;
        else if (fruit === "kiwi") price = 3.00;
        else if (fruit === "pineapple") price = 5.60;
        else if (fruit === "grapes") price = 4.20;
        else isValid = false;
    } else {
        isValid = false;
    }

    if (!isValid) {
        console.log("error");
    } else {
        console.log((price * quantity).toFixed(2));
    }
}

// Примерни извиквания на функцията
calculateFruitPrice("apple", "Tuesday", 2);     // Очакван изход: 2.40
calculateFruitPrice("orange", "Sunday", 3);     // Очакван изход: 2.70
calculateFruitPrice("kiwi", "Monday", 2.5);     // Очакван изход: 6.75
calculateFruitPrice("grapes", "Saturday", 0.5); // Очакван изход: 2.10
calculateFruitPrice("tomato", "Monday", 0.5);   // Очакван изход: error
