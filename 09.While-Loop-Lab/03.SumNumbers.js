function sumNums(array) {
    let targetSum = Number(array[0]);
    let sum = 0;
    let i = 1;

    while (sum < targetSum && i < array.length) {
        sum += Number(array[i]);
        i++;
    }

    console.log(sum);
}

sumNums(["20", "1", "2", "3", "4", "5", "6"]);
