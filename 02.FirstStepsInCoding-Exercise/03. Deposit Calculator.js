function calc(deposit, mounts, fee) {
    sum = deposit + mounts * ((deposit * (fee/100)) / 12);
    console.log(sum);
}

calc(200, 3, 5.7);
calc(2350, 6, 7);