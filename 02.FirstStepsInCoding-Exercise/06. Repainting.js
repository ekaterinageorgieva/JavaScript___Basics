function painting(naylon, paint, aceton, hours) {
    let naylonPrice = 1.50;
    let paintPrice = 14.50;
    let acetonPrice = 5.00;
    let bagsPrice = 0.40;

    let sumMaterials = (((naylon+2) * naylonPrice) + ((paint+ paint*0.1) * paintPrice) + (aceton * acetonPrice)) + bagsPrice;
    workPrice = (sumMaterials * 0.3) * hours;

    totalSum = workPrice + sumMaterials;

    console.log(totalSum);
};

painting(10, 11, 4 , 8);
painting(5, 10, 10, 1);