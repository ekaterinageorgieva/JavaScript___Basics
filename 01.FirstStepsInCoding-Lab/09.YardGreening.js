function house(meters2) {
    let oneMeterPrice = 7.61;
    let discount = 0.18;


    totalPrice = meters2 * oneMeterPrice;
    finalPrice = totalPrice * discount;

    price = totalPrice - finalPrice;

    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${finalPrice} lv.`);     
    
}

house(550);