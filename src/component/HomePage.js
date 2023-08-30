
import home1 from "../imgs/home (2).jpg";
import ItemCategory from "./ItemCategory";
import { BsMouse } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center relative "
        style={{ backgroundImage: `url("${home1}")` }}
      >
        <h3 className="text-4xl tracking-wide text-white font-bold absolute left-[42%] bottom-1/3">
          Zap! Ecommerce
        </h3>
        <p className="text-4xl tracking-wide text-white font-bold absolute left-[35%] bottom-[27%]">
          Go! and start your Shoping!{" "}
        </p>
        <BsMouse className="text-4xl tracking-wide text-white font-bold absolute left-[50%] bottom-3" />
      </div>
      <ItemCategory/>
    </>
  );
};

export default HomePage;
