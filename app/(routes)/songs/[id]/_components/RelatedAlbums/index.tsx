"use client";

import SongCard from "@/app/_components/SongCard";
import { useSong } from "@/app/_services/song";
import { useSongs } from "@/app/_services/songs";
import { useMemo } from "react";

interface RelatedAlbumsProps {
  songId: number;
}

const RelatedAlbums = ({ songId }: RelatedAlbumsProps) => {
  const { data: allSongsData, isLoading: isLoadingAllSongs } = useSongs();
  const { data: currentSongData, isLoading: isLoadingCurrentSong } =
    useSong(songId);
  const isLoading = isLoadingAllSongs || isLoadingCurrentSong;

  const relatedAlbums = useMemo(() => {
    const relatedAlbumIds = currentSongData?.related || [];
    return (
      allSongsData?.songs?.filter((song) =>
        relatedAlbumIds.includes(song.id),
      ) || []
    );
  }, [allSongsData?.songs, currentSongData?.related]);

  if (isLoading) return;

  return (
    <section className="z-10 space-y-5">
      <h2 className="font-medium text-white/70">Other albums</h2>

      {relatedAlbums.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:grid-cols-5">
          {relatedAlbums.map((relatedAlbum) => (
            <SongCard
              key={relatedAlbum.id}
              song={relatedAlbum}
              disableFavorite
            />
          ))}
        </div>
      ) : (
        <p className="text-sm">No related albums found for this song</p>
      )}
    </section>
  );
};

export default RelatedAlbums;
