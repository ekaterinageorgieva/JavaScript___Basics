function password(array) {
    let username = array[0];
    let password = array[1];;
    let data = array[2];
    let index = 3;

    while (data !== password) {
        data = array[index];    
        index++;
    }

    console.log(`Welcome ${username}!`);
    
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);