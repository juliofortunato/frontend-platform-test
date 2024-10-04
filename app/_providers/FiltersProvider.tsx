"use client";

import { ReactNode, useState } from "react";
import { FiltersContext } from "../_contexts/FiltersContext";

export default function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FiltersContext.Provider value={{ searchTerm, search: setSearchTerm }}>
      {children}
    </FiltersContext.Provider>
  );
}
