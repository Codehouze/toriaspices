import React from "react";
import { ProductList } from "../components";
import Banner from "../components/Banner";

function products() {
  return (
    <>
      <Banner title="Spices" />;
      <ProductList />;
    </>
  );
}
export default products;
