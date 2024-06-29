import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetails";
import { BooksProvider } from "./booksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
        </Routes>
      </BooksProvider>
    </>
  );
}

export default App;
