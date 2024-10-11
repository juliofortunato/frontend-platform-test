"use client";

import { useFilters } from "@/app/_hooks/useFilters";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";
import { useCallback } from "react";

const FilterFavoritesButton = () => {
  const { favoritesOnly, toggleFavoritesOnly } = useFilters();

  const handleCLick = useCallback(() => {
    toggleFavoritesOnly();
  }, [toggleFavoritesOnly]);

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/15 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25",
        {
          "bg-white/25": favoritesOnly,
        },
      )}
      onClick={handleCLick}
    >
      <HeartIcon
        className={cn("transition-colors", {
          "fill-carnation text-carnation": favoritesOnly,
        })}
        size={20}
      />
      Favorites
    </button>
  );
};

export default FilterFavoritesButton;
