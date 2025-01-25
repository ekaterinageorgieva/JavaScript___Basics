function guessTreasureDoor(penchoChoice) {
    if (penchoChoice !== 1 && penchoChoice !== 2 && penchoChoice !== 3) {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
        return;
    }

    const treasureDoor = Math.floor(Math.random() * 3) + 1;

    if (penchoChoice === treasureDoor) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${treasureDoor}!`);
    } else {
        console.log("A bucket of cold water splashes on you! Unlucky Pen4o!");
    }
}

guessTreasureDoor(1);
guessTreasureDoor(3);
guessTreasureDoor(4); 

