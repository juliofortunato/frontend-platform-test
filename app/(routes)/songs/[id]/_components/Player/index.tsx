"use client";

import FavoriteButton from "@/app/_components/FavoriteButton";
import Loading from "@/app/_components/Loading";
import { useSong } from "@/app/_services/song";
import { PauseIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Slider from "../Slider";

interface PlayerProps {
  songId: number;
}

const Player = ({ songId }: PlayerProps) => {
  const { data, isLoading, error } = useSong(songId);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = useCallback(() => {
    setIsPlaying((previous) => !previous);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  }, []);

  const handleSliderChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  }, []);

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  const backgoundStyle = useMemo(
    () => ({
      backgroundImage: `url('/assets/images/${data?.song.files.poster}')`,
      backgroundSize: "50% auto",
    }),
    [data?.song.files.poster],
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <p>Error while fetching the song: {error.message}</p>;
  }

  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 hidden h-screen max-h-[90%] bg-cover bg-right-top bg-no-repeat opacity-50 blur-sm sm:block sm:bg-right-top`}
        style={backgoundStyle}
      />

      <div className="flex flex-col items-center gap-9 sm:flex-row">
        <Image
          alt=""
          className="rounded-[5px] border border-dove-gray"
          height={204}
          src={`/assets/images/${data?.song.files.coverArt}`}
          width={204}
        />

        <div className="z-10 flex flex-col gap-9">
          <div className="flex items-center gap-9">
            <button
              className="h-16 w-16 rounded-full bg-white p-4 text-black transition-colors hover:bg-white/80"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <PauseIcon className="fill-black" size={32} />
              ) : (
                <PlayIcon className="fill-black" size={32} />
              )}
            </button>

            <div>
              <div className="flex items-center gap-5">
                <h1 className="text-[2rem] font-medium">{data?.song.title}</h1>
                {data?.id && <FavoriteButton songId={data.id} />}
              </div>
              <div className="flex flex-col gap-1 font-medium text-white/90 md:flex-row md:gap-3">
                <span>{data?.song.artist}</span>
                <span className="hidden md:block">|</span>
                <span>{data?.song.album.title}</span>
                <span className="hidden md:block">|</span>
                <span>{data?.song.album.year}</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <Slider
              value={currentTime}
              max={duration}
              step={1}
              onChange={handleSliderChange}
            />
            <div className="flex items-center justify-between text-sm text-silver-chalice">
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(duration - currentTime)}</span>
            </div>
          </div>
        </div>
      </div>

      <audio
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        ref={audioRef}
        src={`/assets/audio/${data?.song.files.audio}`}
      />
    </>
  );
};

export default Player;
