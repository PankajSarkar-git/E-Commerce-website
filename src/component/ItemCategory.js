import ItemCategoryCard from "./ItemCategoryCard";
// import useProducts from "../utills/useProducts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contex/productContex";
const ItemCategory = () => {
  // const productsinfo = useProducts();
  // const productsinfo = useProducts();
  // console.log(productsinfo);

  const { isLoading, products } = useProductsContext();
  console.log(products);
  return isLoading ? <ShimmerUi/> : (
    <>
      <div className="bg-gray-200">
        <p className="p-2 flex-wrap pt-6 px-36 text-3xl">Our Store</p>
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
