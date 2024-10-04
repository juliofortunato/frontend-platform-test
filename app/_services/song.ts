import { useQuery } from "@tanstack/react-query";
import { Song } from "../_types/song";
import api from "./api";

export const fetchSong = async (id: number) => {
  const response = await api.get<Song>(`/songs/${id}`);
  return response.data;
};

export const useSong = (id: number) => {
  return useQuery({
    queryKey: ["songs", id],
    queryFn: () => fetchSong(id),
    staleTime: 60000,
  });
};
