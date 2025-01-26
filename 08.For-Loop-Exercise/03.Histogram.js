function calculateHistogram(input) {
    // Първото число е n (колко числа да обработим)
    let n = input[0];
    let numbers = input.slice(1); // Останалите числа

    // Създаваме броячи за всеки диапазон
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;

    // Обхождаме числата и увеличаваме съответните броячи
    for (let i = 0; i < n; i++) {
        let num = numbers[i];
        if (num < 200) {
            countP1++; // 0-199
        } else if (num < 400) {
            countP2++; // 200-399
        } else if (num < 600) {
            countP3++; // 400-599
        } else if (num < 800) {
            countP4++; // 600-799
        } else {
            countP5++; // 800-1000
        }
    }

    // Изчисляваме процентите за всеки диапазон
    let p1 = ((countP1 / n) * 100).toFixed(2);
    let p2 = ((countP2 / n) * 100).toFixed(2);
    let p3 = ((countP3 / n) * 100).toFixed(2);
    let p4 = ((countP4 / n) * 100).toFixed(2);
    let p5 = ((countP5 / n) * 100).toFixed(2);

    // Отпечатваме резултата
    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}

