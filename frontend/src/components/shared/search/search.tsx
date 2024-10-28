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
    setItens(fixedItens);
  };

  const handleSearch = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const searchValue: string = input.current.value;

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
      <form onSubmit={(evt) => handleSearch(evt)}>
        <input
          type="text"
          name="search"
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
      </form>
    </div>
  );
};

export default Search;
