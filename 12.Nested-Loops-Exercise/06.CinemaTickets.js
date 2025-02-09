function cinemaTickets(input) {
    let index = 0;

    let totalTickets = 0; // Общ брой билети
    let studentTickets = 0; // Брой студентски билети
    let standardTickets = 0; // Брой стандартни билети
    let kidTickets = 0; // Брой детски билети

    while (input[index] !== "Finish") {
        let movieName = input[index]; // Име на текущия филм
        index++;
        let freeSeats = Number(input[index]); // Свободни места за текущия филм
        index++;

        let ticketsSold = 0; // Брой продадени билети за текущия филм

        while (input[index] !== "End" && input[index] !== "Finish") {
            let ticketType = input[index]; // Тип на текущия билет
            index++;

            ticketsSold++; // Увеличаваме броя на продадените билети
            totalTickets++; // Увеличаваме общия брой продадени билети

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }

            if (ticketsSold >= freeSeats) {
                break; // Ако местата са запълнени, спираме
            }
        }

        let occupancyPercentage = (ticketsSold / freeSeats) * 100;
        console.log(`${movieName} - ${occupancyPercentage.toFixed(2)}% full.`);

        if (input[index] === "End") {
            index++; // Преминаваме към следващия филм
        }
    }

    // Изчисляваме процентите на типовете билети
    let studentPercentage = (studentTickets / totalTickets) * 100;
    let standardPercentage = (standardTickets / totalTickets) * 100;
    let kidPercentage = (kidTickets / totalTickets) * 100;

    // Отпечатваме финалната статистика
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);