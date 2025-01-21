function calculateHotelCost(days, roomType, review) {
    const nights = days - 1;
    let pricePerNight;
    let discount = 0;

    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            break;
        case "president apartment":
            pricePerNight = 35.00;
            break;
    }

    let totalCost = pricePerNight * nights;

    if (roomType === "apartment") {
        if (nights < 10) {
            discount = 0.30;
        } else if (nights >= 10 && nights <= 15) {
            discount = 0.35;
        } else {
            discount = 0.50;
        }
    } else if (roomType === "president apartment") {
        if (nights < 10) {
            discount = 0.10;
        } else if (nights >= 10 && nights <= 15) {
            discount = 0.15;
        } else {
            discount = 0.20;
        }
    }

    totalCost -= totalCost * discount;

    if (review === "positive") {
        totalCost += totalCost * 0.25;
    } else if (review === "negative") {
        totalCost -= totalCost * 0.10;
    }

    console.log(totalCost.toFixed(2));
}

calculateHotelCost(14, "apartment", "positive");
calculateHotelCost(30, "president apartment", "negative");
calculateHotelCost(12, "room for one person", "positive");
calculateHotelCost(2, "apartment", "positive");
