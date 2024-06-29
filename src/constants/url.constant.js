export const BOOK_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "api/book"
    : "//localhost:3000/api/book";
