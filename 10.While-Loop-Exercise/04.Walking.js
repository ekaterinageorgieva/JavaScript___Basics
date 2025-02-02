function walking(input) {
    let goal = 10000;
    let totalSteps = 0;
    let i = 0;

    while (i < input.length) {
        let command = input[i];

        if (command === "Going home") {
            totalSteps += Number(input[i + 1]);
            break;
        }

        totalSteps += Number(command);

        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
            return;
        }

        i++;
    }

    if (totalSteps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - totalSteps} more steps to reach goal.`);
    }
}


walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
