function solve(chicken, fish, vegan) {
    let chickenPrice = 10.35
    let fishPrice = 12.40
    let veganPrice = 8.15
    let deliveryPrice = 2.50

    let sum = (chicken * chickenPrice) + (fish * fishPrice) + (vegan * veganPrice)
    desertPrice = sum * 0.20

    totalSum = (sum + desertPrice) + deliveryPrice

    console.log(totalSum)
}

solve(2, 4, 3)