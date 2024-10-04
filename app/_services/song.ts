import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Song } from "../_types/song";

export const fetchSong = async (id: number) => {
  const response = await axios.get<Song>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/songs/${id}`,
  );
  return response.data;
};

export const useSong = (id: number) => {
  return useQuery({
    queryKey: ["songs", id],
    queryFn: () => fetchSong(id),
    staleTime: 60000,
  });
};
