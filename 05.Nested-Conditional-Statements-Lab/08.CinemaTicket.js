function getTicketPrice(day) {
    let price;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        price = 12;
    } else if (day === 'Wednesday' || day === 'Thursday') {
        price = 14;
    } else if (day === 'Saturday' || day === 'Sunday') {
        price = 16;
    } else {
        price = "Invalid day";  // За всички невалидни входове
    }

    console.log(price);
}

// Примерни извиквания на функцията
getTicketPrice("Monday");   // Очакван изход: 12
getTicketPrice("Friday");   // Очакван изход: 12
getTicketPrice("Sunday");   // Очакван изход: 16

