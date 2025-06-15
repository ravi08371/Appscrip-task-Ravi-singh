import React from "react";
import "@/styles/FilterSidebar.css";
import FilterDropdown from "@/components/FilterDropdown";
import { DataContext } from "./MainPage";

const FilterSidebar = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    React.useContext(DataContext);
  return (
    <aside className={"sidebar"}>
      <FilterDropdown
        title="OCCASION"
        options={categories}
        onSelect={setSelectedCategory}
        selected={selectedCategory}
      />
    </aside>
  );
};

export default FilterSidebar;
