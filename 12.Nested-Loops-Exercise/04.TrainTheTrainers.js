function trainTheTrainers(input) {
    let index = 0;
    const juryCount = Number(input[index]); // Броят на хората в журито
    index++;
    let totalAverage = 0; // Общ среден успех от всички презентации
    let totalPresentations = 0; // Броят на всички презентации

    while (input[index] !== "Finish") {
        const presentationName = input[index]; // Името на текущата презентация
        index++;
        let presentationSum = 0; // Сума от оценките за текущата презентация

        for (let i = 0; i < juryCount; i++) {
            const grade = Number(input[index]); // Текуща оценка
            presentationSum += grade;
            index++;
        }

        const presentationAverage = presentationSum / juryCount; // Средна оценка за презентацията
        console.log(`${presentationName} - ${presentationAverage.toFixed(2)}.`);

        totalAverage += presentationAverage; // Добавяне на средната оценка към общия успех
        totalPresentations++; // Увеличаваме броя на презентациите
    }

    // Изчисляване на средния успех от всички презентации
    const finalAssessment = totalAverage / totalPresentations;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);
