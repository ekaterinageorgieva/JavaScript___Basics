function identifyProduct(product) {
    // Дефиниране на списъците с плодове и зеленчуци
    const fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    const vegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];

    // Проверка и извеждане на резултата
    if (fruits.includes(product)) {
        console.log("fruit");
    } else if (vegetables.includes(product)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

// Примерни извиквания на функцията
identifyProduct("apple");   // Очакван изход: fruit
identifyProduct("tomato");  // Очакван изход: vegetable
identifyProduct("potato");  // Очакван изход: unknown
