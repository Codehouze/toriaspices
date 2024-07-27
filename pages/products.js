import React from "react";
import { ProductList } from "../app/components";
import Banner from "../app/components/Banner";

function products() {
  return (
    <>
      <Banner title="Spices" />;
      <ProductList />;
    </>
  );
}
export default products;
