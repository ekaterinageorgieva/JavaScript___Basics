function suppliesForSchool(pens, markers, cleaner, discount) {
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let cleanerPrice = 1.20;
    let discountPrice = discount / 100;

    sum = (pens * pensPrice) + (markers * markersPrice) + (cleaner * cleanerPrice);
    totalSum = sum - (sum * discountPrice)
    console.log(totalSum);
    
};

suppliesForSchool(2, 3, 4, 25); 