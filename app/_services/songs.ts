import { useQuery } from "@tanstack/react-query";
import { Song } from "../_types/song";
import api from "./api";

export const fetchSongs = async () => {
  const response = await api.get<{ songs: Song[] }>("/songs");
  return response.data;
};

export const useSongs = () => {
  return useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
    staleTime: 60000,
  });
};
