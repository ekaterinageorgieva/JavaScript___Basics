function checkNumberValidity(number) {
    // Проверка дали числото е в диапазона [100...200] или е точно 0
    if ((number < 100 || number > 200) && number !== 0) {
        console.log("invalid");
    }
}

// Примерни извиквания на функцията
checkNumberValidity(75);   // Очакван изход: invalid
checkNumberValidity(150);  // Няма изход
checkNumberValidity(220);  // Очакван изход: invalid
checkNumberValidity(199);  // Няма изход

checkNumberValidity(-1);   // Очакван изход: invalid
checkNumberValidity(100);  // Няма изход
checkNumberValidity(200);  // Няма изход
checkNumberValidity(0);    // Няма изход
