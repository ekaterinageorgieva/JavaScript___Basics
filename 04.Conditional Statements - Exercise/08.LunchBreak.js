function lunchBreak(showName, episodeDuration, breakDuration) {
    // Изчисляваме времето за обяд и времето за отдих
    const lunchTime = breakDuration * (1 / 8);
    const relaxTime = breakDuration * (1 / 4);

    // Изчисляваме останалото време за гледане
    const remainingTime = breakDuration - lunchTime - relaxTime;

    // Проверяваме дали останалото време е достатъчно за гледане на епизода
    if (remainingTime >= episodeDuration) {
        const freeTime = Math.ceil(remainingTime - episodeDuration); // Закръгляме нагоре
        console.log(`You have enough time to watch ${showName} and left with ${freeTime} minutes free time.`);
    } else {
        const neededTime = Math.ceil(episodeDuration - remainingTime); // Закръгляме нагоре
        console.log(`You don't have enough time to watch ${showName}, you need ${neededTime} more minutes.`);
    }
}


lunchBreak("Game of Thrones", 60, 96); // Очакван резултат: You have enough time to watch Game of Thrones and left with 0 minutes free time.
lunchBreak("Teen Wolf", 48, 60); // Очакван резултат: You don't have enough time to watch Teen Wolf, you need 11 more minutes.
