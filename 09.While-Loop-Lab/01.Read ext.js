function lookingForStopWord(array) {
    /* let stopWord = 'Stop';
    for (let i = 0; i < array.length; i++) {
        if (array[i] === stopWord) {
            break;
        }
        console.log(array[i]);
    } */

    let stopWord = 'Stop';
    let i = 0;

    while (i < array.length && array[i] !== stopWord) {
        console.log(array[i]);
        i++;
    }


}

lookingForStopWord(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
