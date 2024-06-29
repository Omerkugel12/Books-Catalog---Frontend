import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export function useBooksContext() {
  return useContext(BooksContext);
}

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
