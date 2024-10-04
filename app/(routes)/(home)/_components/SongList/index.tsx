"use client";

import SongCard from "@/app/_components/SongCard";
import { FavoritesContext } from "@/app/_contexts/FavoritesContext";
import { useSongs } from "@/app/_services/songs";
import { useContext } from "react";

const SongList = () => {
  const { data } = useSongs();
  const { favoriteSongIds, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.songs?.map((song) => {
        const isFavorite = favoriteSongIds.includes(song.id);

        return (
          <SongCard
            key={song.id}
            song={song}
            favorite={isFavorite}
            onFavorite={() => toggleFavorite(song.id)}
          />
        );
      })}
    </div>
  );
};

export default SongList;
