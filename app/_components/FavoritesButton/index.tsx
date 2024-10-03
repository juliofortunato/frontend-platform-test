import { HeartIcon } from "lucide-react";

interface FavoritesButtonProps {
  isActive?: boolean;
}

const FavoritesButton = ({ isActive }: FavoritesButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25 ${isActive ? "bg-white/25" : "bg-white/15"} `}
    >
      <HeartIcon
        className={`${isActive && "fill-[#F8594E] text-[#F8594E]"}`}
        size={20}
      />
      Favorites
    </button>
  );
};

export default FavoritesButton;
