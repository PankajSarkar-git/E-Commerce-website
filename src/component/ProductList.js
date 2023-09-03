import React from "react";
import Sort from "./Sort";
import Product from "./Product";
import FIlterSection from "./FIlterSection";
import { useFilterContext } from "../contex/filterContext";

const ProductList = () => {
  const {filter_products} = useFilterContext();
  console.log(filter_products);
  return (
    <div className="bg-gray-200 pt-[10vh] ">
      <p className="p-2 flex-wrap pt-6 px-36 text-3xl">Our Store</p>
    <div>
        <FIlterSection/>
    </div>
      <section>
        <div>
          <Sort />
        </div>
        <div>
          <Product />
        </div>
      </section>
    </div>
  );
};

export default ProductList;
