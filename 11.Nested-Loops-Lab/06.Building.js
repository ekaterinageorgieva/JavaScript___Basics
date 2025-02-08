function printBuilding(floors, roomsPerFloor) {
    for (let floor = floors; floor >= 1; floor--) {
        let result = "";
        for (let room = 0; room < roomsPerFloor; room++) {
            if (floor === floors) {
                // Последен етаж - големи апартаменти
                result += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                // Четен етаж - офиси
                result += `O${floor}${room} `;
            } else {
                // Нечетен етаж - апартаменти
                result += `A${floor}${room} `;
            }
        }
        console.log(result.trim());
    }
}

printBuilding(6, 4);
printBuilding(9, 5);