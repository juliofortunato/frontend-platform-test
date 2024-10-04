import { createContext } from "react";

interface FiltersContextProps {
  searchTerm: string;
  search: (searchTerm: string) => void;
}

export const FiltersContext = createContext<FiltersContextProps>({
  searchTerm: "",
  search: () => {},
});
