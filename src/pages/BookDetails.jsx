import React, { useEffect, useState } from "react";
import { useBooksContext } from "../booksContext";
import { useParams } from "react-router";
import axios from "axios";
import { BOOK_BASE_URL } from "../constants/url.constant";

function BookDetails() {
  // const { books, setBooks } = useBooksContext();
  const { book, setBook } = useBooksContext();
  const { bookId } = useParams();

  useEffect(() => {
    async function getBook() {
      try {
        const { data: bookFetched } = await axios.get(
          `${BOOK_BASE_URL}/${bookId}`
        );
        setBook(bookFetched);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  });

  if (book === null) return;

  return (
    <>
      <h1 className="text-center text-5xl">{book.title}</h1>
      <p>Authors: {book.authors.join(", ")}</p>
      <p>genres: {book.genres.join(", ")}</p>
      <p>{book.description}</p>
    </>
  );
}

export default BookDetails;
