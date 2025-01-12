function solve(fee) {
    let sneakers = fee - (fee * 0.4)
    let basketballEquipment = sneakers - (sneakers * 0.20)
    let ball = basketballEquipment / 4
    let accsesoars =  ball / 5

    price = fee + sneakers + basketballEquipment + ball + accsesoars

    console.log(price);
    
}

solve(365)