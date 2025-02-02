function examPreparation(input) {
    let maxPoorGrades = Number(input[0]);
    let poorGradesCount = 0;
    let totalGrades = 0;
    let problemsCount = 0;
    let lastProblem = "";

    let i = 1;
    while (i < input.length) {
        let taskName = input[i];
        if (taskName === "Enough") {
            let averageScore = (totalGrades / problemsCount).toFixed(2);
            console.log(`Average score: ${averageScore}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${lastProblem}`);
            return;
        }

        let grade = Number(input[i + 1]);
        totalGrades += grade;
        problemsCount++;
        lastProblem = taskName;

        if (grade <= 4) {
            poorGradesCount++;
            if (poorGradesCount === maxPoorGrades) {
                console.log(`You need a break, ${poorGradesCount} poor grades.`);
                return;
            }
        }

        i += 2;
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);

