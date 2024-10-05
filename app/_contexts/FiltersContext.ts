import { createContext } from "react";

interface FiltersContextProps {
  searchTerm: string;
  search: (searchTerm: string) => void;
  sortAlphabetically: boolean;
  toggleSortAlphabetically: () => void;
  favoritesOnly: boolean;
  toggleFavoritesOnly: () => void;
}

export const FiltersContext = createContext<FiltersContextProps>({
  searchTerm: "",
  search: () => {},
  sortAlphabetically: false,
  toggleSortAlphabetically: () => {},
  favoritesOnly: false,
  toggleFavoritesOnly: () => {},
});
