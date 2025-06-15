import React from "react";
import "@/styles/productCard.css";
import Image from "next/image";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className={"card"}>
      <div className={"imageWrapper"}>
        <Image
          src={image}
          alt={title}
          className={"image"}
          width={300}
          height={400}
        />
      </div>
      <h2 className={"title"}>{title}</h2>
      <p className={"price"}>${price}</p>
    </div>
  );
};

export default ProductCard;
