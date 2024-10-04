"use client";

import { FavoritesContext } from "@/app/_contexts/FavoritesContext";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";
import { MouseEvent, useContext } from "react";

interface FavoriteButtonProps {
  songId: number;
}

const FavoriteButton = ({ songId }: FavoriteButtonProps) => {
  const { favoriteSongIds, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favoriteSongIds.includes(songId);

  const handleFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    toggleFavorite?.(songId);
  };

  return (
    <button onClick={handleFavoriteClick}>
      <HeartIcon
        className={cn({
          "fill-[#F8594E] text-[#F8594E]": isFavorite,
        })}
        size={20}
      />
    </button>
  );
};

export default FavoriteButton;
