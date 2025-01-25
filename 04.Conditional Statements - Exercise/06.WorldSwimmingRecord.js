function worldSwimmingRecord(record, distance, timePerMeter) {
<<<<<<< HEAD
    let baseTime = distance * timePerMeter;

    let resistanceTime = Math.floor(distance / 15) * 12.5;

    let totalTime = baseTime + resistanceTime;

=======
    // Calculate the base time without water resistance
    let baseTime = distance * timePerMeter;

    // Calculate the additional time due to water resistance
    let resistanceTime = Math.floor(distance / 15) * 12.5;

    // Calculate the total time
    let totalTime = baseTime + resistanceTime;

    // Check if Ivan has broken the world record
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeDifference = totalTime - record;
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}

<<<<<<< HEAD
=======
// Example usage:
>>>>>>> 156cb405947ec560549fa1cbd1759f3375b085c3
worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);