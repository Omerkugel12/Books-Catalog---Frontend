import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BooksProvider } from "./booksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksProvider>
  </React.StrictMode>
);
