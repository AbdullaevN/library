import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bookDelete, bookUpdate } from "../../redux/actions";

const SingleBook = ({ data }) => {
  const [bookText, setBookText] = useState("");
  const { text, id } = data;
  console.log(data, "data");
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(bookDelete(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("submitUpdate", bookText);
    dispatch(bookUpdate(bookText, id));
  };

  useEffect(() => {
    if (text) {
      setBookText(text);
    }
  }, []);

  const handleInput = (e) => {
    setBookText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={handleDelete} className="comments-item-delete">
          {" "}
          &times;{" "}
        </div>
        <input type="text" value={bookText} onChange={handleInput} />
        <label htmlFor="Name"></label>
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default SingleBook;
