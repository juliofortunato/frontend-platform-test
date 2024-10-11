"use client";

import Loading from "@/app/_components/Loading";
import SongCard from "@/app/_components/SongCard";
import { useFavorites } from "@/app/_hooks/useFavorites";
import { useFilters } from "@/app/_hooks/useFilters";
import { useSongs } from "@/app/_services/songs";
import { filterSongsBySearchTerm } from "@/app/_utils/filter-songs-by-search-term";
import { useMemo } from "react";

const SongList = () => {
  const { data, isLoading, error } = useSongs();
  const { searchTerm, sortAlphabetically, favoritesOnly } = useFilters();
  const { favoriteSongIds } = useFavorites();

  const processsedSongs = useMemo(() => {
    let filtered = filterSongsBySearchTerm(data?.songs || [], searchTerm);

    if (sortAlphabetically) {
      filtered = [...filtered].sort((a, b) =>
        a.song.title.localeCompare(b.song.title),
      );
    }

    if (favoritesOnly) {
      filtered = filtered.filter((song) => favoriteSongIds.includes(song.id));
    }

    return filtered;
  }, [
    data?.songs,
    favoriteSongIds,
    favoritesOnly,
    searchTerm,
    sortAlphabetically,
  ]);

  if (isLoading) return <Loading />;

  if (error) {
    return <p>Error while fetching songs: {error.message}</p>;
  }

  if (!processsedSongs || !processsedSongs.length) {
    return <p>No songs matched the search criteria</p>;
  }

  return (
    <>
      <p className="font-medium text-white/50">
        {searchTerm
          ? `Your search has returned ${processsedSongs.length} results`
          : `You have ${data?.songs.length || 0} songs in your library`}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {processsedSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </>
  );
};

export default SongList;
