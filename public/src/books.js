function findAuthorById(authors, id) {
  return (authorID = authors.find((author) => author.id === id));
}

function findBookById(books, id) {
  let findBook = books.find((book) => book.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowBook = books.filter((book) => !book.borrows[0].returned);
  let returnBook = books.filter((book) => book.borrows[0].returned);
  return [borrowBook, returnBook];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      account.returned = borrow.returned;
      return account;
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
