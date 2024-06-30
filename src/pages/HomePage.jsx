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
          title: searchParams.get("title"),
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

  function handleFilterSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const genres = formData.get("genres");

    searchParams.set("title", title);
    searchParams.set("genres", genres);
    setSearchParams(searchParams);
  }

  // function handleFilterChange(ev) {
  //   const inputName = ev.target.name;
  //   const value = ev.target.value;
  //   searchParams.set(inputName, value);
  //   setSearchParams(searchParams);
  // }

  return (
    <>
      <h1 className="text-center text-6xl">Our Books</h1>
      <form
        onSubmit={handleFilterSubmit}
        className="flex justify-center items-center gap-4"
      >
        <div className="my-10 flex flex-col  justify-center items-center">
          <label htmlFor="title">Search by book name</label>
          <input
            className="border border-violet-800"
            type="text"
            id="title"
            name="title"
            // value={searchParams.get("title") || ""}
            // onChange={handleFilterChange}
            placeholder="Enter book name..."
          />
        </div>
        <div className="my-10 flex flex-col  justify-center items-center">
          <label htmlFor="genres">Select genre</label>
          <select
            className="border border-indigo-800"
            name="genres"
            id="genres"
            // value={searchParams.get("genres") || ""}
            // onChange={handleFilterChange}
            placeholder="nolekm"
          >
            <option value="">All</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fiction">Fiction</option>
            <option value="Coming-of-age">Coming-of-age</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Philosophical Fiction">Philosophical Fiction</option>
            <option value="Classic">Classic</option>
            <option value="Gothic">Gothic</option>
            <option value="Realist Fiction">Realist Fiction</option>
            <option value="Modernist">Modernist</option>
          </select>
        </div>
        <button className="border bg-emerald-600 text-red-50 text-2xl rounded-lg p-2">
          Apply filter
        </button>
      </form>
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
