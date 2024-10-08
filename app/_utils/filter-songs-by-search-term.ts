import { Song } from "../_types/song";

export const filterSongsBySearchTerm = (songs: Song[], searchTerm: string) => {
  return songs.filter(
    ({ song }) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
