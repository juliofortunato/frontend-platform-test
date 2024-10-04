"use client";

import { ReactNode, useEffect, useState } from "react";
import { FavoritesContext } from "../_contexts/FavoritesContext";

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoriteSongIds, setFavoriteSongIds] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favoriteSongIds") || "[]",
    );
    setFavoriteSongIds(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteSongIds", JSON.stringify(favoriteSongIds));
  }, [favoriteSongIds]);

  const toggleFavorite = (songId: number) => {
    if (favoriteSongIds.includes(songId)) {
      setFavoriteSongIds(favoriteSongIds.filter((id) => id !== songId));
    } else {
      setFavoriteSongIds([...favoriteSongIds, songId]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoriteSongIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
