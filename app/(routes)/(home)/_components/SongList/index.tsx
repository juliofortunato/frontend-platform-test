"use client";

import SongCard from "@/app/_components/SongCard";
import { useSongs } from "@/app/_services/songs";

const SongList = () => {
  const { data } = useSongs();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
      {data?.songs?.map((song) => <SongCard key={song.id} song={song} />)}
    </div>
  );
};

export default SongList;
