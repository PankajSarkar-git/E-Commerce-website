import{AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../utills/wishListSlice";

const ItemCategoryCard = ({items, index}) => {
    // const [wish, setWish] = useState(false)

    const wishlist = useSelector((store)=>{
        return store.wishList.items
    })
    //  console.log(wishlist[index].id);

    
    //  console.log(itemno);

    const { category, image, title, price, rating, id } = items;
    
    const dispatch = useDispatch()
    const wishlistAddhandel = () => {
        dispatch(addWishList(items))
    }
    const wishlistremovehandel = () => {
        dispatch(removeWishList(index))
    }
    
    return(
        <div className=" text-start justify-center shadow-lg h-fit w-64 items-center p-4 m-5 relative bg-white rounded-lg" key={id}>
        <AiFillHeart onClick={wishlistAddhandel} className="absolute text-xl  right-2 top-2" />
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