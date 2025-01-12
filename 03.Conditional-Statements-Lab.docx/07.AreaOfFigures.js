function calculateArea(figure, a, b) {
    let area = 0;

    if (figure === "square") {
        area = a * a;
    } else if (figure === "rectangle") {
        area = a * b;
    } else if (figure === "circle") {
        area = Math.PI * a * a;
    } else if (figure === "triangle") {
        area = (a * b) / 2;
    }

    console.log(area.toFixed(3));
}

// Примерни извиквания на функцията
calculateArea("square", 5);   
calculateArea("rectangle", 4, 6);   

