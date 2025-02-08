function travelPlanner(input) {
    let index = 0;

    while (index < input.length) {
        let destination = input[index];
        index++;

        if (destination === "End") {
            break;
        }

        let requiredBudget = Number(input[index]);
        index++;

        let savedMoney = 0;

        while (savedMoney < requiredBudget) {
            savedMoney += Number(input[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);
    }
}

travelPlanner([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);
