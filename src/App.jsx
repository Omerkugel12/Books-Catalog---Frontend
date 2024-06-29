import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <nav>
        <h1>Books Catalog</h1>
        <ul>
          <li>HomePage</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
