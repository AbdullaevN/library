import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookDelete, bookUpdate } from "../../redux/actions";

const SingleBook = ({ data }) => {
  const [bookText, setBookText] = useState("");
  const [setAuthor] = useState("");
  const { text, id, author } = data;
  console.log(data, "data");
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(bookDelete(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("submitUpdate", bookText, id, author);
    dispatch(bookUpdate(bookText, id, author));
  };

  useEffect(() => {
    if (text) {
      setBookText(text, id, author);
    }
  }, []);

  const handleInput = (e) => {
    setBookText(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleUpdate} className="comments-item">
        <button
          onClick={handleDelete}
          className="comments-item-delete w-20 bg-sky-500 h-11 m-3 rounded-lg"
        >
          {" "}
          &times; delete
        </button>
        <input className="w-5" type="text" value={id} onChange={handleAuthor} />
        <input
          className="w-2/3"
          type="text"
          value={bookText}
          onChange={handleInput}
        />
        <input type="text" value={author} onChange={handleAuthor} />
        <label htmlFor="Name"></label>
        <label htmlFor="Name"></label>
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default SingleBook;
