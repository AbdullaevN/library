import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteUser } from "../features/Users";
import MyNavbar from "../components/MyNavbar";

const AddComponent = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  //   const [name, setName] = useState("");
  //   const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <div className="App">
      <MyNavbar />
      <h2>create with redux</h2>{" "}
      <div className="addProduct h-6 mt-16">
        <input
          type="text"
          placeholder="Description..."
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Photo..."
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addProduct({
                id: userList[userList.length - 1].id + 1,

                description,
                price,
                photo,
              })
            );
          }}
        >
          {" "}
          Add Product
        </button>
      </div>
      <table className="displayUsers md:container md:mx-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Views</th>
            <th className="px-4 py-2">Views</th>
            <th className="px-4 py-2">Views</th>
          </tr>
        </thead>
        {userList.map((user) => {
          return (
            <>
              <tbody
                key={user.id}
                className=" p-4 border-2 border-indigo-600 ... "
              >
                <tr className="m-11 odd:bg-white even:bg-slate-50">
                  <td className="m-11">
                    <img
                      className="bg-contain w-32 h-32"
                      src={user.photo}
                      alt=""
                    />
                  </td>
                  <td>{user.price}</td>
                  <td>{user.description}</td>
                  <td className="w-36">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                      }}
                    >
                      Delete User
                    </button>
                  </td>
                  <td className="w-36">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                      }}
                    >
                      Update User
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default AddComponent;
