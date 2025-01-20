function personalTitles(age, gender) {
  if (gender === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      return "Master";
    }
  } else if (gender === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}
personalTitles(12, "f");
