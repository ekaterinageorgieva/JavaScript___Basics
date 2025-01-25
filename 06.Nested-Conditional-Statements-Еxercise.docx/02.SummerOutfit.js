function suggestOutfit(temperature, timeOfDay) {
    let outfit, shoes;

    if (timeOfDay === "Morning") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeOfDay === "Afternoon") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (temperature >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (timeOfDay === "Evening") {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}


suggestOutfit(16, "Morning");
suggestOutfit(22, "Afternoon");
suggestOutfit(28, "Evening");
