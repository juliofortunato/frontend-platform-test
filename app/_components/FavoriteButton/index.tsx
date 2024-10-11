"use client";

import { useFavorites } from "@/app/_hooks/useFavorites";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";
import { MouseEvent, useCallback } from "react";

interface FavoriteButtonProps {
  songId: number;
}

const FavoriteButton = ({ songId }: FavoriteButtonProps) => {
  const { favoriteSongIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteSongIds.includes(songId);

  const handleFavoriteClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      toggleFavorite?.(songId);
    },
    [songId, toggleFavorite],
  );

  return (
    <button
      onClick={handleFavoriteClick}
      title={`${isFavorite ? "Remove from favorites" : "Add to favorites"}`}
    >
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
