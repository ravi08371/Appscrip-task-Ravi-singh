"use client";
import FilterSidebar from "@/components/FilterSideBar";
import ProductGrid from "@/components/ProductGrid";
import "@/styles/mainPage.css";
import ProductIntro from "@/components/ProductIntro";
import FilterSortBar from "@/components/FilterSortBar";
import UseProduct from "@/hooks/useProduct";
import React from "react";

export const DataContext = React.createContext();

const MainPage = () => {
  const productState = UseProduct();

  return (
    <DataContext.Provider value={productState}>
      <ProductIntro />
      <FilterSortBar />
      <div className="main-container">
        {productState?.isFilterVisible && <FilterSidebar />}
        <main className="main-content">
          <ProductGrid />
        </main>
      </div>
    </DataContext.Provider>
  );
};

export default MainPage;
