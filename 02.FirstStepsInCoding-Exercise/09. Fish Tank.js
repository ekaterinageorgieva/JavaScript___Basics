function aquarium(length, width, height, percent) {
    // 1. Изчисляване на обема на аквариума в куб. см
    let volumeCm3 = length * width * height;
    
    // 2. Преобразуване на обема в литри (1 литър = 1000 куб. см)
    let volumeLiters = volumeCm3 / 1000;
    
    // 3. Изчисляване на използваемия обем (като извадим процента)
    let waterVolume = volumeLiters * (1 - percent / 100);
    
    // 4. Отпечатване на резултата
    console.log(waterVolume); // Закръгляне до 3 знака след десетичната запетая
}

// Примерни тестове
aquarium(85, 75, 47, 17);
aquarium(105, 77, 89, 18.5);
