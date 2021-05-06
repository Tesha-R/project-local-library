function findAccountById(accounts, id) {
  return (matchId = accounts.find((account) => account.id === id));
}

function sortAccountsByLastName(accounts) {
  return accounts
    .map((account) => {
      return { name: account.name };
    })
    .sort((nameA, nameB) =>
      nameA["name"].last.toLowerCase() > nameB["name"].last.toLowerCase()
        ? 1
        : -1
    );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    books[i].borrows.forEach((book) => {
      if (book.id === account.id) {
        counter++;
      }
    });
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account;
  let filterBook = books.filter((book) => {
    return book.borrows.some((borrow) => {
      return borrow.id === id && borrow.returned === false;
    });
  });
  return filterBook.map((book) => {
    book.author = authors.find((author) => author.id === book.authorId);
    return book;
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
