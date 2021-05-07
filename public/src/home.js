function getTotalBooksCount(books) {
  let accumulator = 0;
  return (bookTotal = books.reduce((acc, book) => {
    return acc + 1;
  }, 0));
}

function getTotalAccountsCount(accounts) {
  let counter = 0;
  for (let i = 0; i < accounts.length; i++) {
    counter++;
  }
  return counter;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  let bookObj = {};
  books.forEach((book) => {
    if (bookObj[book.genre]) {
      bookObj[book.genre]++;
    } else {
      bookObj[book.genre] = 1;
    }
  });
  return Object.entries(bookObj)
    .map(([name, count]) => {
      return { name, count };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let borrowCount = 0;
  let bookObj = {};
  return books
    .map((book) => {
      let author = authors.find((author) => author.id === book.authorId);
      return {
        name: author.name.first + " " + author.name.last,
        count: book.borrows.length,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
