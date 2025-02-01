function studentGraduation(input) {
    const studentName = input[0];
    let grade = 1;
    let totalGrades = 0;
    let failCount = 0;
    let index = 1;

    while (grade <= 12) {
        const yearlyGrade = Number(input[index]);
        index++;

        if (yearlyGrade < 4.00) {
            failCount++;
            if (failCount > 1) {
                console.log(`${studentName} has been excluded at ${grade} grade`);
                return;
            }
        } else {
            totalGrades += yearlyGrade;
            grade++;
        }
    }

    const averageGrade = (totalGrades / 12).toFixed(2);
    console.log(`${studentName} graduated. Average grade: ${averageGrade}`);
}

studentGraduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
