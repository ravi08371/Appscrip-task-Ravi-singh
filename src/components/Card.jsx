"use client"
import useCommon from "@/hooks/useCommon";
import Link from "next/link";
import React, { use } from "react";

const Card = () => {
  const { fetchProducts } = useCommon();
  let fetchData = use(fetchProducts());
  return (
    <>
      {fetchData &&
        fetchData?.map((value) => {
          return (
            <div key={value} style={{ margin: "1rem" }}>
              <Link href={`/productdetails/${value?.title}/${value?.id}`}>
                {" "}
                {value?.title}
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Card;
