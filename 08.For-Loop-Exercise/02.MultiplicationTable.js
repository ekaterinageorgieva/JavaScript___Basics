function multiplicationTable(num) {
    num = Number(num);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${num * i}`);
    }
}

multiplicationTable(5);