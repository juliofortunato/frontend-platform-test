import { createContext } from "react";

interface FavoritesContextProps {
  favoriteSongIds: number[];
  toggleFavorite: (songId: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  favoriteSongIds: [],
  toggleFavorite: () => {},
});
