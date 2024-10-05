"use client";

import { useFilters } from "@/app/_hooks/useFilters";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";

const FilterFavoritesButton = () => {
  const { favoritesOnly, toggleFavoritesOnly } = useFilters();

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/15 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25",
        {
          "bg-white/25": favoritesOnly,
        },
      )}
      onClick={toggleFavoritesOnly}
    >
      <HeartIcon
        className={cn({
          "fill-[#F8594E] text-[#F8594E]": favoritesOnly,
        })}
        size={20}
      />
      Favorites
    </button>
  );
};

export default FilterFavoritesButton;
