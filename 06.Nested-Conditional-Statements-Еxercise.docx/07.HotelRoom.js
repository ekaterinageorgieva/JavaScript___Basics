function calculateHotelCost(month, nights) {
    let studioPricePerNight;
    let apartmentPricePerNight;
    let totalStudioPrice;
    let totalApartmentPrice;

    switch (month) {
        case "May":
        case "October":
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;
            break;
        case "June":
        case "September":
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
            break;
        case "July":
        case "August":
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
    }

    totalStudioPrice = studioPricePerNight * nights;
    totalApartmentPrice = apartmentPricePerNight * nights;

    if ((month === "May" || month === "October") && nights > 14) {
        totalStudioPrice *= 0.70;
    } else if ((month === "May" || month === "October") && nights > 7) {
        totalStudioPrice *= 0.95;
    } else if ((month === "June" || month === "September") && nights > 14) {
        totalStudioPrice *= 0.80;
    }

    if (nights > 14) {
        totalApartmentPrice *= 0.90;
    }

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}


calculateHotelCost("May", 15);
calculateHotelCost("June", 14);
calculateHotelCost("August", 20);
