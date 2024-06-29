import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
