"use client";
import { SearchIcon } from "@/public/assets/icons/icons";
import { useState } from "react";

type propsType = {
  autoFocus?: boolean;
  onChange?: any;
};
const Search = (props: propsType) => {
  const [focusState, setFoucusState] = useState(false);
  const onFoucusHandler = () => {
    return setFoucusState(true);
  };
  return (
    <div className="sm:w-[335px] w-full h-[55px] flex justify-between items-center px-[15px] bg-white rounded-lg ">
      <input
        type="text"
        placeholder="Search question"
        onChange={(e) => props?.onChange(e)}
        className="border-none outline-none bg-transparent h-full w-[80%]"
        autoFocus={focusState}
      />
      <button className="rounded  py-2 " onClick={() => onFoucusHandler()}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
