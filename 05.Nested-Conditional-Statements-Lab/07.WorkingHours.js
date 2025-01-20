function isOfficeOpen(hour, dayOfWeek) {
    // Проверка дали денят е неделя
    if (dayOfWeek === "Sunday") {
        return "closed";
    }

    // Проверка дали часът е в работното време от 10 до 18 часа
    if (hour >= 10 && hour < 18) {
        return "open";
    }

    // Всички останали случаи, когато офисът не работи
    return "closed";
}

// Примерни извиквания на функцията
console.log(isOfficeOpen(11, "Monday")); // Очакван изход: open
console.log(isOfficeOpen(19, "Friday")); // Очакван изход: closed
console.log(isOfficeOpen(11, "Sunday")); // Очакван изход: closed
