import React from "react";
import "@/styles/filterDropdown.css";

const FilterDropdown = ({ title, options, onSelect, selected }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };
  return (
    <div className="filter-dropdown">
      <label>{title}</label>
      <select onChange={handleChange}>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className={`${"categoryItem"} ${selected === opt ? "active" : ""}`}
            style={{ textTransform: "capitalize" }}
          >
            {opt?.charAt(0).toUpperCase() + opt?.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
