import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";

interface FilterFavoritesButtonProps {
  isActive?: boolean;
}

const FilterFavoritesButton = ({ isActive }: FilterFavoritesButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/15 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25",
        {
          "bg-white/25": isActive,
        },
      )}
    >
      <HeartIcon
        className={`${isActive && "fill-[#F8594E] text-[#F8594E]"}`}
        size={20}
      />
      Favorites
    </button>
  );
};

export default FilterFavoritesButton;
