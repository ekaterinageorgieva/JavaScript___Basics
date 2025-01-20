function weekendOrWorkingDay(day) {
    if(day === "Monday" || day === "Tuesday" || day ==="Wednesday" || day ==="Thursday" || day ==="Friday"){
        console.log("Working day");
        
    } else if(day === "Saturday" || day ==="Sunday"){
        console.log("Weekend");
    } else {
        console.log("Error");
        
    }
}

weekendOrWorkingDay("April");
weekendOrWorkingDay("Monday");
weekendOrWorkingDay("Sunday");