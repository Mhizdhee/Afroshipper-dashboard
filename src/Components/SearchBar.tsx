import React from "react";
import SearchIcon from "../assets/Icons/search-lg.png";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="relative ">
        <input
          type="text"
          className="w-[574px] border border-gray-300 rounded-md pl-10 pr-4 py-2"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
