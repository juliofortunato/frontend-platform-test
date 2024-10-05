"use client";

import Loading from "@/app/_components/Loading";
import SearchInput from "@/app/_components/SearchInput";
import { useSongs } from "@/app/_services/songs";
import { filterSongBySearchTerm } from "@/app/_utils/filter-song-by-search-term";
import Link from "next/link";
import { useState } from "react";

const Autocomplete = () => {
  const { data, isLoading } = useSongs();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSongs = filterSongBySearchTerm(data?.songs || [], searchTerm);

  if (isLoading) return <Loading />;

  return (
    <div className="relative space-y-2">
      <SearchInput onChange={setSearchTerm} value={searchTerm} />
      {searchTerm && (
        <div className="bg-mine-shaft absolute z-10 w-full rounded-md px-4">
          {filteredSongs?.map((song) => (
            <Link
              href={`/songs/${song.id}`}
              className="border-emperor block border-b py-2 text-sm font-medium text-cod-gray transition-colors last:border-none hover:text-white"
              key={song.id}
            >
              {song.song.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
