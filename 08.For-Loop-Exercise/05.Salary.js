function browserTabsCheck(input) {
    let n = input[0]; // Брой отворени табове
    let salary = input[1]; // Първоначална заплата

    // Списък с глобите за съответните сайтове
    const fines = {
        "Facebook": 150,
        "Instagram": 100,
        "Reddit": 50
    };

    // Обхождаме табовете
    for (let i = 2; i < 2 + n; i++) {
        let site = input[i]; // Името на уебсайта

        // Проверяваме дали сайтът е в списъка с глоби
        if (fines[site]) {
            salary -= fines[site]; // Намаляваме заплатата с размера на глобата

            // Проверяваме дали заплатата е изчерпана
            if (salary <= 0) {
                console.log("You have lost your salary.");
                return; // Прекратяваме програмата
            }
        }
    }

    // Ако заплатата не е изчерпана, отпечатваме остатъка
    console.log(Math.floor(salary));
}

browserTabsCheck([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook", "Facebook", "Facebook", "Facebook"]);