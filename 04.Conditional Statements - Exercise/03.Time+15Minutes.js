function timePlus15Minutes(hours, minutes) {
   
    minutes += 15;

    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    if (hours >= 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

timePlus15Minutes(1, 46);
timePlus15Minutes(0, 1);  
timePlus15Minutes(23, 59)
timePlus15Minutes(11, 8)
timePlus15Minutes(12, 49)
