function animalType(animal) {
    if(animal === "dog"){
        console.log("mammal");
    } else if(animal === "snake" || animal ==="crocodile" || animal === "tortoise"){
        console.log("reptile");
    } else{
        console.log("unknown");
    }
}

animalType("dog")
animalType("snake")
animalType("cat")