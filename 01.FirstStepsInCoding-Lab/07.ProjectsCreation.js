function func(name, hours) {
    let singleProject = 3;
    let counthours = singleProject * hours
    console.log(`The architect ${name} will need ${counthours} hours to complete ${hours} project/s.`);
    
}

func("George", 4);