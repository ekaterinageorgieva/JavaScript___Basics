function birthdayCake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let totalPieces = width * length;

    let i = 2;
    while (i < input.length) {
        let command = input[i];

        if (command === "STOP") {
            console.log(`${totalPieces} pieces are left.`);
            return;
        }

        let piecesTaken = Number(command);
        totalPieces -= piecesTaken;

        if (totalPieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            return;
        }

        i++;
    }
}

birthdayCake(["10", "10", "20", "20", "20", "20", "21"]);
birthdayCake(["10", "2", "2", "4", "6", "STOP"]);
