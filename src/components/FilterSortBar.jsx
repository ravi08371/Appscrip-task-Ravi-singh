"use client";
import React, { useState } from "react";
import "@/styles/filterSortBar.css";
import { DataContext } from "./MainPage";

const sortOptions = [
  "RECOMMENDED",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const FilterSortBar = () => {
  const { filteredProducts, handleSortChange, isFilterVisible, toggleFilter } =
    React.useContext(DataContext);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedSort(option);
    handleSortChange(option);
    setDropdownOpen(false);
  };

  return (
    <div className="filter-sort-bar">
      <div className="left-section">
        <span className="item-count">
          {filteredProducts?.length || 0} ITEMS
        </span>
        <button onClick={toggleFilter} className="hide-filter">
          {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className="right-section">
        <div className="sort-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedSort} <span className="arrow">▼</span>
          </button>

          {dropdownOpen && (
            <ul className="dropdown-menu">
              {sortOptions.map((opt) => (
                <li
                  key={opt}
                  className={opt === selectedSort ? "selected" : ""}
                  onClick={() => handleSelect(opt)}
                >
                  {opt === selectedSort ? "✓ " : ""}
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
