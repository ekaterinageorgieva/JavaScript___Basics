function lunchBreak(showName, episodeDuration, breakDuration) {
 
    const lunchTime = breakDuration * (1 / 8);
    const relaxTime = breakDuration * (1 / 4);

    const remainingTime = breakDuration - lunchTime - relaxTime;

    if (remainingTime >= episodeDuration) {
        const freeTime = Math.ceil(remainingTime - episodeDuration); // Закръгляме нагоре
        console.log(`You have enough time to watch ${showName} and left with ${freeTime} minutes free time.`);
    } else {
        const neededTime = Math.ceil(episodeDuration - remainingTime); // Закръгляме нагоре
        console.log(`You don't have enough time to watch ${showName}, you need ${neededTime} more minutes.`);
    }
}


lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60)
