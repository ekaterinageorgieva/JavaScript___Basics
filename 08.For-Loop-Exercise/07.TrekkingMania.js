function climbingGroups(input) {
    let groupCount = Number(input[0]); // Брой групи
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    // Обработваме всяка група
    for (let i = 1; i <= groupCount; i++) {
        let peopleInGroup = Number(input[i]);
        totalPeople += peopleInGroup; // Актуализираме общия брой хора

        // Проверяваме кой връх изкачват
        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            montBlanc += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

    // Изчисляваме процентите
    let musalaPercentage = ((musala / totalPeople) * 100).toFixed(2);
    let montBlancPercentage = ((montBlanc / totalPeople) * 100).toFixed(2);
    let kilimanjaroPercentage = ((kilimanjaro / totalPeople) * 100).toFixed(2);
    let k2Percentage = ((k2 / totalPeople) * 100).toFixed(2);
    let everestPercentage = ((everest / totalPeople) * 100).toFixed(2);

    // Отпечатваме резултатите
    console.log(`${musalaPercentage}%`);
    console.log(`${montBlancPercentage}%`);
    console.log(`${kilimanjaroPercentage}%`);
    console.log(`${k2Percentage}%`);
    console.log(`${everestPercentage}%`);
}

climbingGroups([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);
