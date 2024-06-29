import axios from "axios";
import React, { useEffect, useState } from "react";
import { BOOK_BASE_URL } from "../constants/url.constant";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useBooksContext } from "../booksContext";

function HomePage() {
  const { books, setBooks } = useBooksContext();
  const { bookId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function getBooks() {
      const options = {
        params: {
          genres: searchParams.get("genres"),
        },
      };
      try {
        const { data: booksfetced } = await axios.get(BOOK_BASE_URL, options);
        setBooks(booksfetced);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  });

  function handleFilterChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;
    searchParams.set(inputName, value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <h1 className="text-center text-6xl">Our Books</h1>
      <div className="text-center my-10">
        {/* <input
          className="border border-y-black p-2"
          name="genres"
          type="text"
          placeholder="Search by genre"
          value={searchParams.get("genres") || ""}
          onChange={handleFilterChange}
        /> */}
        <select name="genres" id="">
          <option value="">Dystopian</option>
          <option value="">Science Fiction</option>
          <option value="">Fiction</option>
          <option value="">Coming-of-age</option>
          <option value="">Historical Fiction</option>
          <option value=""></option>
        </select>
      </div>
      <ul className="flex flex-row flex-wrap space-y-10 space-x-4">
        {books.map((book) => {
          return (
            <li
              key={book._id}
              className="border border-violet-900 w-52 flex flex-col space-y-5 p-2 relative"
            >
              <p>{book.title}</p>
              <p>{book.description}</p>
              <Link to={`/book/${book._id}`}>
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
