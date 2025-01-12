function penchoOdyssey(firstSideSize, secondSideSize, thirdSideSize) {
    if (
      firstSideSize + secondSideSize > thirdSideSize &&
      firstSideSize + thirdSideSize > secondSideSize &&
      secondSideSize + thirdSideSize > firstSideSize
    )
      console.log(`The Triangle of Truth with sides ${firstSideSize}, ${secondSideSize}, and ${thirdSideSize} has been validated. Pen4o, you may begin your journey!`);
    else {
      console.log(`The Triangle of Truth with sides ${firstSideSize}, ${secondSideSize}, and ${thirdSideSize} is invalid. Pen4o remains stuck!`);
    }
  }

penchoOdyssey(3, 4, 5);
penchoOdyssey(1, 2, 3);
