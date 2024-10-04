"use client";

import { ReactNode, useState } from "react";
import { FiltersContext } from "../_contexts/FiltersContext";

export default function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const toggleSortAlphabetically = () => {
    setSortAlphabetically((previous) => !previous);
  };

  return (
    <FiltersContext.Provider
      value={{
        searchTerm,
        search: setSearchTerm,
        sortAlphabetically,
        toggleSortAlphabetically,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
