function findFavoriteBook(books) {
    let favoriteBook = books[0];
    let checkedBooks = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${checkedBooks} books.`);
            return;
        }

        if (books[i] === favoriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }

        checkedBooks++;
    }
}

findFavoriteBook(["Troy", "Stronger", "Life Style", "Troy"]);
findFavoriteBook(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
findFavoriteBook(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
