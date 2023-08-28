import { useState, useEffect, createContext } from "react";
import data from "../books.json";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [filteredBooks, setFilteredBooks] = useState(data.library);
  const [readingBooks, setReadingBooks] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("books"));
    setReadingBooks(storedData);
  }, []);

  const handleAddBook = (book) => {
    const updateData = [...readingBooks, book];
    setReadingBooks(updateData);
    localStorage.setItem("books", JSON.stringify(updateData));
  };

  const handleRemoveBook = (book) => {
    const updateData = readingBooks.filter(
      (item) => item.book.ISBN !== book.book.ISBN
    );
    setReadingBooks(updateData);
    localStorage.setItem("books", JSON.stringify(updateData));
  };

  const avileBooks = filteredBooks.filter(
    (item) => !readingBooks.some((book) => book.book.ISBN === item.book.ISBN)
  );

  const valueContext = {
    setFilteredBooks,
    handleAddBook,
    handleRemoveBook,
    avileBooks,
    readingBooks,
  };

  return (
    <BooksContext.Provider value={valueContext}>
      {children}
    </BooksContext.Provider>
  );
};
