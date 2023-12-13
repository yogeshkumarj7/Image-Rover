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
    <div className="flex flex-col items-center space-y-4">
      {/* Search input */}
      <input
        className="bg-gray-100 border border-gray-300 text-sm w-full p-3 outline-none focus:border-blue-500 focus:ring-2 rounded-lg"
        type="search"
        placeholder="Discover amazing images..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />

      {/* Search button */}
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-white rounded-full focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        Explore
      </button>
    </div>
  );
};

export default SearchField;
