"use client";

import { useFavorites } from "@/app/_hooks/useFavorites";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";
import { MouseEvent } from "react";

interface FavoriteButtonProps {
  songId: number;
}

const FavoriteButton = ({ songId }: FavoriteButtonProps) => {
  const { favoriteSongIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteSongIds.includes(songId);

  const handleFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    toggleFavorite?.(songId);
  };

  return (
    <button onClick={handleFavoriteClick}>
      <HeartIcon
        className={cn("transition-colors", {
          "fill-carnation text-carnation": isFavorite,
        })}
        size={20}
      />
    </button>
  );
};

export default FavoriteButton;
