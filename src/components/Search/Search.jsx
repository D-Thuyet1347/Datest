import React from 'react';
import './Search.css';
import { IoMdSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div className="search">
        <div className="search-component">
      <input type="text" placeholder="Search..." />
      <button><IoMdSearch /></button>
    </div>
    </div>
  );
};