import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBook from "../features/books/AddBook";
import { jsonLoad } from "../redux/actions";

const AddBookPage = () => {
  const books = useSelector((state) => {
    console.log("addstate", state);
    const { bookReducer } = state;
    return bookReducer.books;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jsonLoad());
  }, []);
  console.log(books, "books1");
  console.log(books.data, "books1data");
  return (
    <div className="md:container md:mx-auto">
      <AddBook />
      {/* 
      {!!books.length &&
        // eslint-disable-next-line no-unused-vars
        books.map((res) => {
          return <h3>{data.res}</h3>;
        })} */}
      <h3>{books.data}</h3>
    </div>
  );
};

export default AddBookPage;
