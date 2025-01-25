function calculateFlowerCost(flowerType, quantity, budget) {
    const prices = {
        "Roses": 5,
        "Dahlias": 3.80,
        "Tulips": 2.80,
        "Narcissus": 3,
        "Gladiolus": 2.50
    };

    let pricePerFlower = prices[flowerType];
    let totalCost = quantity * pricePerFlower;

    
    if (flowerType === "Roses" && quantity > 80) {
        totalCost *= 0.9; 
    } else if (flowerType === "Dahlias" && quantity > 90) {
        totalCost *= 0.85; 
    } else if (flowerType === "Tulips" && quantity > 80) {
        totalCost *= 0.85; 
    } else if (flowerType === "Narcissus" && quantity < 120) {
        totalCost *= 1.15; 
    } else if (flowerType === "Gladiolus" && quantity < 80) {
        totalCost *= 1.2; 
    }

    
    if (budget >= totalCost) {
        let remaining = budget - totalCost;
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${remaining.toFixed(2)} leva left.`);
    } else {
        let needed = totalCost - budget;
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
    }
}


calculateFlowerCost("Roses", 55, 250);
calculateFlowerCost("Tulips", 88, 260);
calculateFlowerCost("Narcissus", 119, 360);
