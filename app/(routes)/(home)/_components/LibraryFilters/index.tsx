"use client";

import SearchInput from "@/app/_components/SearchInput";
import Toggle from "@/app/_components/Toggle";
import { FiltersContext } from "@/app/_contexts/FiltersContext";
import { useContext } from "react";

const LibraryFilters = () => {
  const { search, searchTerm, sortAlphabetically, toggleSortAlphabetically } =
    useContext(FiltersContext);

  return (
    <div className="flex flex-col gap-4 sm:items-end lg:flex-row lg:items-center lg:gap-6">
      <Toggle
        checked={sortAlphabetically}
        label="Sort from A-Z"
        onChange={toggleSortAlphabetically}
      />
      <SearchInput value={searchTerm} onChange={search} />
    </div>
  );
};

export default LibraryFilters;
