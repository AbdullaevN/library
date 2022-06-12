import React from "react";
import { useSelector } from "react-redux";

const BookLists = () => {
  const books = useSelector((state) => {
    console.log("redux-state", state);
    const { bookReducer } = state;
    return bookReducer.books;
  });
  console.log(books, "books");

  return (
    <div>
      {books && books.map((book) => <label htmlFor="Nmae"> {book.id}</label>)}
    </div>
  );
};

export default BookLists;
