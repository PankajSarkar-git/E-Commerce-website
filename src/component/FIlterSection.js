import React from "react";
import { useFilterContext } from "../contex/filterContext";

const FIlterSection = () => {
  const {
    filters: { text },
    updetFilterValue,
  } = useFilterContext();
  // console.log(updetFilterValue);
  return (
    <div className="p-5 text-xl">
    <label htmlFor="">Search</label>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
        className="w-full mt-2 border border-gray-200"
          type="text"
          name="text"
          value={text}
          onChange={updetFilterValue}
        />
      </form>
    </div>
  );
};

export default FIlterSection;
