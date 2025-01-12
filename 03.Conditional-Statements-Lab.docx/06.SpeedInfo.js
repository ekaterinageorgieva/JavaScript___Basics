function checkSpeed(speed) {
    if (speed <= 10) {
        console.log("slow");
    } else if (speed > 10 && speed <= 50) {
        console.log("average");
    } else if (speed > 50 && speed <= 150) {
        console.log("fast");
    } else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

// Пример за извикване на функцията
checkSpeed(8);    // Резултат: "slow"
checkSpeed(30);   // Резултат: "average"
checkSpeed(120);  // Резултат: "fast"
checkSpeed(800);  // Резултат: "ultra fast"
checkSpeed(1500); // Резултат: "extremely fast"
