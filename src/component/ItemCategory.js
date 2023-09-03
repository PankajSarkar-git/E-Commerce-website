import ItemCategoryCard from "./ItemCategoryCard";
// import useProducts from "../utills/useProducts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contex/productContex";
import { useState } from "react";






const ItemCategory = () => {
  const [sort , setSort] = useState('');
  const { isLoading, products } = useProductsContext();






  return isLoading ? <ShimmerUi/> : (
    <>
      <div className="bg-gray-200 pt-[10vh] ">
        <p className="p-2 flex-wrap pt-6 px-36 text-3xl">Our Store</p>
        {/* <div className="px-36">
          <form action="#">
            <label htmlFor="sort" onClick={sorting}></label>
            <select name="" id="sort">
              <option value="lowToHingh">Low to high</option>
              <option value="highToLow">high to Low</option>
              <option value="a-z">A to Z</option>
              <option value="z-a">Z to A</option>
            </select>
          </form>
        </div> */}
        <div className=" flex justify-around shadow-md p-2 flex-wrap px-36">
          {products.map((items, index) => {
            return (
              <Link to={"/ProductList/" + items.id} key={items.id}>
                <ItemCategoryCard items={items} index={index} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ItemCategory;
