import React, { useContext, useState } from "react";
import { ImageContext } from "../Context/Appcontext";

const SearchField = () => {
  // Destructuring useContext result
  const { fetchData, setSearchImage } = useContext(ImageContext);

  // State for the search input value
  const [searchValue, setSearchValue] = useState("");

  // Handler for input change
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Handler for button click
  const handleButtonSearch = () => {
    performSearch();
  };

  // Handler for Enter key press
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  // Function to perform search and reset input
  const performSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  return (
    <div className="flex">
      {/* Search input */}
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-sky-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search for images"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />

      {/* Search button */}
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-sky-500 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
