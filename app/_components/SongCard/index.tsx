import { Song } from "@/app/_types/song";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

interface SongCardProps {
  disableFavorite?: boolean;
  song: Song;
}

const SongCard = ({ disableFavorite = false, song }: SongCardProps) => {
  return (
    <Link
      className="w-full max-w-[283px] overflow-hidden rounded-md bg-[#262626]"
      href={`/songs/${song.id}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image alt="" src={`/assets/images/${song.song.files.coverArt}`} fill />
      </div>
      <div className="relative flex items-end justify-between p-4">
        <div className="max-w-full">
          <h3 className="truncate text-lg font-medium">{song.song.title}</h3>
          <h4 className="text-xs font-medium text-[#666666]">
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
};

export default SongCard;
