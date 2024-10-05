import { useContext } from "react";
import { FiltersContext } from "../_contexts/FiltersContext";

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
