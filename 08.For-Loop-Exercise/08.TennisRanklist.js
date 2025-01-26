function tennisRanklist(input) {
    const tournaments = Number(input[0]); // Брой турнири
    let startingPoints = Number(input[1]); // Начален брой точки
    let totalPoints = startingPoints; // Общият брой точки след турнирите
    let winCount = 0; // Брой спечелени турнири
    let pointsFromTournaments = 0; // Общият брой точки, спечелени от турнирите

    // Обработваме резултатите от всеки турнир
    for (let i = 2; i < 2 + tournaments; i++) {
        const stage = input[i]; // Етап от турнира

        if (stage === "W") {
            totalPoints += 2000;
            pointsFromTournaments += 2000;
            winCount++;
        } else if (stage === "F") {
            totalPoints += 1200;
            pointsFromTournaments += 1200;
        } else if (stage === "SF") {
            totalPoints += 720;
            pointsFromTournaments += 720;
        }
    }

    // Средно спечелени точки на турнир
    const averagePoints = Math.floor(pointsFromTournaments / tournaments);

    // Процент спечелени турнири
    const winPercentage = ((winCount / tournaments) * 100).toFixed(2);

    // Отпечатваме резултатите
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercentage}%`);
}

tennisRanklist([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
]);
