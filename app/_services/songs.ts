import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Song } from "../_types/song";

export const fetchSongs = async () => {
  const response = await axios.get<{ songs: Song[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/songs`,
  );
  return response.data;
};

export const useSongs = () => {
  return useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
    staleTime: 60000,
  });
};
