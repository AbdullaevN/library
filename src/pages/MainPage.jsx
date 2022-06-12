import React from "react";
import BookList from "../components/BookList";
import Button from "../components/Button";

const MainPage = () => {
  return (
    <div className="md:container md:mx-auto">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Create book
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Save Changes
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Save Changes
      </button>
      <Button />

      <BookList />
    </div>
  );
};

export default MainPage;
