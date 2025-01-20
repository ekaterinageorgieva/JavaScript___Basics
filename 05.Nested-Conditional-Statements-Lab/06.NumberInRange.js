function checkNumberInRange(number) {
    // Проверка дали числото е в интервала [-100, 100], но не е 0
    if (number !== 0 && number >= -100 && number <= 100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Примерни извиквания на функцията
checkNumberInRange(-101);  // No
checkNumberInRange(0);     // No
checkNumberInRange(100);   // Yes
checkNumberInRange(50);    // Yes
checkNumberInRange(-50);   // Yes
checkNumberInRange(150);   // No
