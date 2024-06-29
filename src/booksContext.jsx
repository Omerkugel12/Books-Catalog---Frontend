import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export function useBooksContext() {
  return useContext(BooksContext);
}

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  return (
    <BooksContext.Provider value={{ books, setBooks, book, setBook }}>
      {children}
    </BooksContext.Provider>
  );
}
