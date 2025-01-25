function calculateBonusScore(points) {
    let bonus = 0;

    if (points <= 100) {
        bonus = 5;
    } else if (points <= 1000) {
        bonus = points * 0.2;
    } else {
        bonus = points * 0.1;
    }

    if (points % 2 === 0) {
        bonus += 1;
    }

    if (points % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log((points + bonus));
}

<<<<<<< HEAD
calculateBonusScore(175);
=======
// Example usage:
calculateBonusScore(175); // Change the number to test with different inputs
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
