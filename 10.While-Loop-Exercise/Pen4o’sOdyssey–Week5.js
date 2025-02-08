function fillTheWell(targetVolume, cups) {
    let currentVolume = 0;

    for (let cup of cups) {
        if (cup < 0) {
            console.log("Failure! The well has been sealed.");
            return;
        }

        currentVolume += cup;

        if (currentVolume > targetVolume) {
            console.log("Overflow! The well rejects your offering.");
            return;
        }

        if (currentVolume === targetVolume) {
            console.log("Success! The well reveals its precious treasure!");
            return;
        }
    }
}

fillTheWell(50, [30, 20]);
fillTheWell(100, [10, 30, -10]);
fillTheWell(50, [30, 40]);
