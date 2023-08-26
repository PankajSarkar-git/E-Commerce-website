import ItemCategoryCard from "./ItemCategoryCard";
import useProducts from "../utills/useProducts";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
const ItemCategory = () => {
  const productsinfo = useProducts();
  // console.log(productsinfo);

  return productsinfo.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="bg-gray-200">
        <p className="p-2 flex-wrap pt-6 px-36 text-3xl">Our Store</p>
        <div className=" flex justify-around shadow-md p-2 flex-wrap px-36">
          {productsinfo.map((items) => {
            return (
              <Link to={"/ProductList/" + items.id} key={items.id}>
              <ItemCategoryCard
                  items={items}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ItemCategory;
