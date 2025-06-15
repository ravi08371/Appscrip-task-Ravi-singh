import React from "react";
import ProductCard from "@/components/ProductCard";
import "@/styles/productGrid.css";
import { DataContext } from "./MainPage";

const ProductGrid = () => {
  const { filteredProducts } = React.useContext(DataContext);
  return (
    <div className={"grid"}>
      {filteredProducts && filteredProducts?.length > 0 ? (
        filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductGrid;
