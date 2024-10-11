import { Song } from "@/app/_types/song";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import FavoriteButton from "../FavoriteButton";

interface SongCardProps {
  disableFavorite?: boolean;
  song: Song;
}

const SongCard = memo(({ disableFavorite = false, song }: SongCardProps) => {
  return (
    <Link
      className="group z-10 w-full max-w-[283px] overflow-hidden rounded-md bg-mine-shaft transition-colors hover:bg-cod-gray"
      href={`/songs/${song.id}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 132px, (max-width: 1200px) 180px, 2340px"
          src={`/assets/images/${song.song.files.coverArt}`}
        />
      </div>
      <div className="relative flex items-end justify-between p-4">
        <div className="max-w-full">
          <h3 className="truncate text-lg font-medium">{song.song.title}</h3>
          <h4 className="truncate text-xs font-medium text-dove-gray transition-colors group-hover:text-white">
            {song.song.artist}
          </h4>
        </div>
        {!disableFavorite && (
          <div className="absolute bottom-1 right-3">
            <FavoriteButton songId={song.id} />
          </div>
        )}
      </div>
    </Link>
  );
});

SongCard.displayName = "SongCard";

export default SongCard;
