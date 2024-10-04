import { Song } from "@/app/_types/song";
import { cn } from "@/app/_utils/cn";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

interface SongCardProps {
  disableFavorite?: boolean;
  favorite?: boolean;
  onFavorite?: () => void;
  song: Song;
}

const SongCard = ({
  disableFavorite = false,
  favorite,
  onFavorite,
  song,
}: SongCardProps) => {
  const handleFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    onFavorite?.();
  };

  return (
    <Link
      className="w-full max-w-[283px] overflow-hidden rounded-md bg-[#262626]"
      href={`/song/${song.id}`}
    >
      <Image
        alt=""
        height={204}
        src={`/assets/images/${song.song.files.coverArt}`}
        width={204}
      />
      <div className="p-4">
        <div>
          <h3 className="text-lg font-medium">{song.song.title}</h3>
          <h4 className="text-xs font-medium text-[#666666]">
            {song.song.artist}
          </h4>
        </div>
        {!disableFavorite && (
          <button onClick={handleFavoriteClick}>
            <HeartIcon
              className={cn({
                "fill-[#F8594E] text-[#F8594E]": favorite,
              })}
              size={20}
            />
          </button>
        )}
      </div>
    </Link>
  );
};

export default SongCard;
