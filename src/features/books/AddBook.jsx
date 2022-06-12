import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookCreate } from "../../redux/actions";

import uniqid from "uniqid";
import SingleBook from "./SingleBook";

const AddBook = (props) => {
  console.log(props, "props");
  const [textBook, setTextBook] = useState("");
  const [author, setAuthor] = useState("");
  const books = useSelector((state) => {
    console.log("redux-state", state);
    const { bookReducer } = state;
    return bookReducer.books;
  });
  console.log(books, "books");

  //
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setTextBook(e.target.value);
  };
  const hanldeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(bookCreate(textBook, author, id));
  };

  //

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg md:container md:mx-auto"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              onChange={handleInput}
              value={textBook}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Author
            </label>
            <input
              value={author}
              onChange={hanldeAuthor}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Author"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div> */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Detective</option>
                <option>Fantasy</option>
                <option>Roman</option>
                <option>Poetry</option>
                <option>Childrens book</option>
                <option>Books about psychology</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>

            <button
              onClick={handleSubmit}
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-6 rounded"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </form>

      {!!books.length &&
        books.map((res) => {
          return <SingleBook key={res.id} data={res} />;
        })}
    </>
  );
};

export default AddBook;
