import React from "react";

const BookList = () => {
  return (
    <div className="">
      {/* <div className="table w-full ... container mx-auto">
        <div className="table-header-group ...">
          <div className="table-row">
            <div className="table-cell text-left ...">Song</div>
            <div className="table-cell text-left ...">Artist</div>
            <div className="table-cell text-left ...">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell ...">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div className="table-cell ...">Malcolm Lockyer</div>
            <div className="table-cell ...">1961</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Witchy Woman</div>
            <div className="table-cell ...">The Eagles</div>
            <div className="table-cell ...">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Shining Star</div>
            <div className="table-cell ...">Earth, Wind, and Fire</div>
            <div className="table-cell ...">1975</div>
          </div>
        </div>
      </div> */}
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Title</th>
            <th className="w-1/4 px-4 py-2">Author</th>
            <th className="w-1/4 px-4 py-2">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Intro to CSS</td>
            <td className="border px-4 py-2">Adam</td>
            <td className="border px-4 py-2">858</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td className="border px-4 py-2">Adam</td>
            <td className="border px-4 py-2">112</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Intro to JavaScript</td>
            <td className="border px-4 py-2">Chris</td>
            <td className="border px-4 py-2">1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
