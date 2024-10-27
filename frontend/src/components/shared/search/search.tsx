import React from "react";
import I from "@/components/icons/icons";

const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="search" name="search" />
      <button type="reset">
        <I.Close />
      </button>
      <button type="submit">
        <I.Search />
      </button>
    </div>
  );
};

export default Search;
