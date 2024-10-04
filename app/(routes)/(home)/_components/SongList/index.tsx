"use client";

import Loading from "@/app/_components/Loading";
import SongCard from "@/app/_components/SongCard";
import { FiltersContext } from "@/app/_contexts/FiltersContext";
import { useSongs } from "@/app/_services/songs";
import { useContext } from "react";

const SongList = () => {
  const { data, isLoading, error } = useSongs();
  const { searchTerm } = useContext(FiltersContext);
  const filteredSongs = data?.songs.filter(
    ({ song }) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <p>Error while fetching songs: {error.message}</p>;
  }

  if (!filteredSongs || !filteredSongs.length) {
    return <p>No songs matched the search criteria</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
      {filteredSongs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
