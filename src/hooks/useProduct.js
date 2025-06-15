"use client";

import apiUrl from "@/config/ApiUrl";
import { request } from "@/utils/request";
import { useEffect, useState } from "react";

const UseProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let productUrl = apiUrl.fetchProducts;
        let method = "get";
        const res = await request(method, {}, productUrl);
        setProducts(res);
        setFilteredProducts(res);

        // Extract categories
        const uniqueCategories = [
          "all",
          ...new Set(res.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result =
      selectedCategory === "all"
        ? [...products]
        : products?.filter((p) => p.category === selectedCategory);

    switch (sortOption) {
      case "PRICE : LOW TO HIGH":
        result.sort((a, b) => a.price - b.price);
        break;
      case "PRICE : HIGH TO LOW":
        result.sort((a, b) => b.price - a.price);
        break;
      case "RECOMMENDED":
      default:
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOption]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return {
    products,
    selectedCategory,
    sortOption,
    filteredProducts,
    categories,
    isFilterVisible,
    setIsFilterVisible,
    setSortOption,
    setSelectedCategory,
    setFilteredProducts,
    handleSortChange,
    toggleFilter,
  };
};

export default UseProduct;
