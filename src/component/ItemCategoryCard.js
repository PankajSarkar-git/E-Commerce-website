import { Heart } from "lucide-react";
const ItemCategoryCard = ({items}) => {
    const { category, image, title, price, rating, id } = items;

    
    return(
        <div className=" text-start justify-center shadow-lg h-fit w-64 items-center p-4 m-5 relative bg-white rounded-lg" key={id}>
        <Heart className="absolute right-2 top-2" />
            <img className="w-56 h-64 hover:scale-75" src={image}alt="" srcSet="" />
            <div className="m-3">
            <h2 className="text-lg mx-2 hover:text-green-800 cursor-pointer">{title.substring(0,30)}......</h2>
            <span className= {rating.rate>3.8 ? "bg-green-600 block w-fit px-1 py-[2] rounded-lg m-2" : "bg-red-600 block w-fit px-1 py-[2] rounded-lg m-2" }>{rating.rate} ⭐</span>
            <span className="font-bold mx-2">₹ : {Math.floor(price * 10)}</span>

            </div>
        </div>
    )
}
export default ItemCategoryCard;