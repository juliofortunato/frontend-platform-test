"use client";

import { ReactNode, useState } from "react";
import { FiltersContext } from "../_contexts/FiltersContext";

export default function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const toggleSortAlphabetically = () => {
    setSortAlphabetically((previous) => !previous);
  };

  const toggleFavoritesOnly = () => {
    setFavoritesOnly((previous) => !previous);
  };

  return (
    <FiltersContext.Provider
      value={{
        searchTerm,
        search: setSearchTerm,
        sortAlphabetically,
        toggleSortAlphabetically,
        favoritesOnly,
        toggleFavoritesOnly,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
