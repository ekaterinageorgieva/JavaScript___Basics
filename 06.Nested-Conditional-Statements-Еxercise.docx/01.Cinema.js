function ticketPrice(typeProjection, colomns, rows) {
  let income = 0;

  if (typeProjection === "Premiere") {
    income = 12 * colomns * rows;
  } else if (typeProjection === "Normal") {
    income = 7.5 * colomns * rows;
  } else if (typeProjection === "Discount") {
    income = 5 * colomns * rows;
  }

  console.log(`${income.toFixed(2)} leva`);
}

ticketPrice("Premiere", 10, 12);
ticketPrice("Normal", 21, 13);
ticketPrice("Discount", 12, 30);
