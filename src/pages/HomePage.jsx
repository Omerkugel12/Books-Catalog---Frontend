import axios from "axios";
import React, { useEffect, useState } from "react";
import { BOOK_BASE_URL } from "../constants/url.constant";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const [books, setBooks] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    async function getBooks() {
      try {
        const { data } = await axios.get(BOOK_BASE_URL);
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  });

  return (
    <>
      <h1>Our Books</h1>
      <ul className="flex flex-row flex-wrap space-y-10 space-x-4">
        {books.map((book) => {
          return (
            <li
              key={book._id}
              className="border border-violet-900 w-52 flex flex-col space-y-5 p-2 relative"
            >
              <p>{book.title}</p>
              <p>{book.description}</p>
              <Link to={`/book/${bookId}`}>
                <button className="absolute bottom-1 border border-violet-600 bg-violet-600 text-zinc-50 py-1 ">
                  More info
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;
