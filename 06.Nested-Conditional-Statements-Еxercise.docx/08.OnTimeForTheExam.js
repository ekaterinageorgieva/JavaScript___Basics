function examTimeStatus(examHour, examMinute, arrivalHour, arrivalMinute) {
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    const timeDifference = arrivalTime - examTime;
    let status = '';
    let detail = '';

    if (timeDifference < -30) {
        status = "Early";
    } else if (timeDifference <= 0) {
        status = "On time";
    } else {
        status = "Late";
    }

    console.log(status);

    const absoluteDifference = Math.abs(timeDifference);
    const hours = Math.floor(absoluteDifference / 60);
    const minutes = absoluteDifference % 60;

    if (hours > 0) {
        detail += hours + ':';
        detail += minutes.toString().padStart(2, '0');
        detail += ' hours ';
        if (timeDifference > 0) {
            detail += 'after';
        } else {
            detail += 'before';
        }
        detail += ' the start';
    } else if (minutes > 0) {
        detail += minutes + ' minutes ';
        if (timeDifference > 0) {
            detail += 'after';
        } else {
            detail += 'before';
        }
        detail += ' the start';
    }

    if (detail !== '') {
        console.log(detail);
    }
}

examTimeStatus(9, 0, 8, 30);
examTimeStatus(9, 30, 9, 50);
examTimeStatus(10, 0, 10, 0);
