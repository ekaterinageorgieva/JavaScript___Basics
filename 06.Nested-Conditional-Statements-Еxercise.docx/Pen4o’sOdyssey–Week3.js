function decipherMapCode(encryptedCode) {
    let totalPower = 0;
    let decipheredString = '';

    for (let char of encryptedCode) {
        if (char >= '0' && char <= '9') {
            totalPower += parseInt(char, 10);
        }
        else if (char >= 'A' && char <= 'Z') {
            decipheredString += char.toLowerCase();
        }
        else if (char >= 'a' && char <= 'z') {
            decipheredString += char.toUpperCase();
        }
        else {
            decipheredString += char;
        }
    }
    console.log(decipheredString);

    if (totalPower > 20) {
        console.log(`The map reveals your next location! Total power: ${totalPower}`);
    } else {
        console.log(`The map warns of danger! Total power: ${totalPower}`);
    }
}

decipherMapCode("T3r4p_M4p");
decipherMapCode("SecreT_tRe4sure!");
decipherMapCode("Dangerous_2Clue");


