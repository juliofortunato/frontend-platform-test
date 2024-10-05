"use client";

import Loading from "@/app/_components/Loading";
import SongCard from "@/app/_components/SongCard";
import { useFavorites } from "@/app/_hooks/useFavorites";
import { useFilters } from "@/app/_hooks/useFilters";
import { useSongs } from "@/app/_services/songs";
import { filterSongBySearchTerm } from "@/app/_utils/filter-song-by-search-term";

const SongList = () => {
  const { data, isLoading, error } = useSongs();
  const { searchTerm, sortAlphabetically, favoritesOnly } = useFilters();
  const { favoriteSongIds } = useFavorites();
  let filteredSongs = filterSongBySearchTerm(data?.songs || [], searchTerm);

  if (sortAlphabetically) {
    filteredSongs?.sort((a, b) => a.song.title.localeCompare(b.song.title));
  }

  if (favoritesOnly) {
    filteredSongs = filteredSongs?.filter((song) =>
      favoriteSongIds.includes(song.id),
    );
  }

  if (isLoading) return <Loading />;

  if (error) {
    return <p>Error while fetching songs: {error.message}</p>;
  }

  if (!filteredSongs || !filteredSongs.length) {
    return <p>No songs matched the search criteria</p>;
  }

  return (
    <>
      <p className="font-medium text-white/50">
        You have {data?.songs.length || 0} songs in your library
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </>
  );
};

export default SongList;
