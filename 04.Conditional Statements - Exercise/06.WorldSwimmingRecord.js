function worldSwimmingRecord(record, distance, timePerMeter) {
    let baseTime = distance * timePerMeter;

    let resistanceTime = Math.floor(distance / 15) * 12.5;

    let totalTime = baseTime + resistanceTime;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeDifference = totalTime - record;
        console.log(`No, he failed! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);