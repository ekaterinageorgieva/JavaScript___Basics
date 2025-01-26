function isPalindrome(number) {
    const strNum = number.toString();
    return strNum === strNum.split('').reverse().join('');
}

function findHappyNumbers(start, end) {
    let hasHappyNumbers = false;

    for (let num = start; num <= end; num++) {
        if (num % 2 === 0 && num % 3 === 0 && isPalindrome(num)) {
            console.log(num);
            hasHappyNumbers = true;
        }
    }

    if (!hasHappyNumbers) {
        console.log("The statues remain silent...");
    }
}

findHappyNumbers(1, 50);
findHappyNumbers(10, 300);
findHappyNumbers(50, 60);


