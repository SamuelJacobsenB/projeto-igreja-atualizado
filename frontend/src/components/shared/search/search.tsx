"use client";

import React, { useRef } from "react";
import I from "@/components/icons/icons";
import "./styles.scss";

interface SearchProps {
  placeholder: string;
  setItens: React.Dispatch<React.SetStateAction<any[]>>;
  fixedItens: any[];
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  setItens,
  fixedItens,
}: SearchProps) => {
  const input: any = useRef();

  const resetInput = () => {
    input.current.value = "";
    setItens(fixedItens);
  };

  const handleSearch = (searchValue: string): void => {
    const filteredItens = fixedItens.filter((item) => {
      if (item.name) {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      } else {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      }
    });

    setItens(filteredItens);
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        onChange={(evt) => {
          handleSearch(evt.target.value);
        }}
        placeholder={placeholder}
        ref={input}
      />
      <div className="btn_area">
        <button type="reset" onClick={resetInput}>
          <I.Close />
        </button>
        <button type="submit">
          <I.Search />
        </button>
      </div>
    </div>
  );
};

export default Search;
