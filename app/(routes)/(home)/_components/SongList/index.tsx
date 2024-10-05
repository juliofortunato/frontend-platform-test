"use client";

import Loading from "@/app/_components/Loading";
import SongCard from "@/app/_components/SongCard";
import { useFilters } from "@/app/_hooks/useFilters";
import { useSongs } from "@/app/_services/songs";

const SongList = () => {
  const { data, isLoading, error } = useSongs();
  const { searchTerm, sortAlphabetically } = useFilters();
  const filteredSongs = data?.songs.filter(
    ({ song }) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (sortAlphabetically) {
    filteredSongs?.sort((a, b) => a.song.title.localeCompare(b.song.title));
  }

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
