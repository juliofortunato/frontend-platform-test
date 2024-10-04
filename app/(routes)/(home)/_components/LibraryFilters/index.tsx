"use client";

import SearchInput from "@/app/_components/SearchInput";
import Toggle from "@/app/_components/Toggle";
import { useState } from "react";

const LibraryFilters = () => {
  const [sortAlphabetically, setSortAlphabetically] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 sm:items-end lg:flex-row lg:items-center lg:gap-6">
      <Toggle
        checked={sortAlphabetically}
        label="Sort from A-Z"
        onChange={setSortAlphabetically}
      />
      <SearchInput />
    </div>
  );
};

export default LibraryFilters;
