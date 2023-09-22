"use client";

import { SearchIcon } from "@/public/assets/icons/icons";
import { SearchContainer, SearchInput } from "@/styles/Search.styled";

type propsType = {
  autoFocus?: boolean;
  onChange?: any;
};
const Search = (props: propsType) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search question"
        onChange={(e) => props?.onChange(e)}
      />
      <SearchIcon />
    </SearchContainer>
  );
};

export default Search;
