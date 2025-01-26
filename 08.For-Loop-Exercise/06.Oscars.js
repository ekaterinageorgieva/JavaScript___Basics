function calculateActorPoints(input) {
    let actorName = input[0]; // Име на актьора
    let initialPoints = Number(input[1]); // Точки от академията
    let juryCount = Number(input[2]); // Брой оценяващи
    let totalPoints = initialPoints; // Общи точки, започващи с началните

    // Обхождаме оценяващите
    for (let i = 0; i < juryCount; i++) {
        let judgeName = input[3 + i * 2]; // Име на оценяващия
        let judgePoints = Number(input[4 + i * 2]); // Точки от оценяващия

        // Изчисляваме допълнителните точки
        totalPoints += (judgeName.length * judgePoints) / 2;

        // Проверяваме дали точките надхвърлят 1250.5
        if (totalPoints > 1250.5) {
            console.log(
                `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`
            );
            return; // Прекратяваме програмата
        }
    }

    // Ако точките не са достатъчни
    let neededPoints = 1250.5 - totalPoints;
    console.log(
        `Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`
    );
}

calculateActorPoints([
    "Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);
