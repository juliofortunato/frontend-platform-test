"use client";

import SongCard from "@/app/_components/SongCard";
import { useSong } from "@/app/_services/song";
import { useSongs } from "@/app/_services/songs";
import { Song } from "@/app/_types/song";
import { useEffect, useState } from "react";

interface RelatedAlbumsProps {
  songId: number;
}

const RelatedAlbums = ({ songId }: RelatedAlbumsProps) => {
  const { data: allSongsData } = useSongs();
  const { data: currentSongData } = useSong(songId);
  const [relatedAlbums, setRelatedAlbums] = useState<Song[]>([]);

  useEffect(() => {
    const relatedAlbumIds = currentSongData?.related || [];
    const filteredRelatedAlbums =
      allSongsData?.songs?.filter((song) =>
        relatedAlbumIds.includes(song.id),
      ) || [];

    setRelatedAlbums(filteredRelatedAlbums);
  }, [allSongsData?.songs, currentSongData?.related]);

  if (!relatedAlbums.length) return null;

  return (
    <section className="space-y-5">
      <h2 className="font-medium text-white/70">Other albums</h2>

      <div className="grid grid-cols-4 gap-8">
        {relatedAlbums.map((relatedAlbum) => (
          <SongCard key={relatedAlbum.id} song={relatedAlbum} disableFavorite />
        ))}
      </div>
    </section>
  );
};

export default RelatedAlbums;
