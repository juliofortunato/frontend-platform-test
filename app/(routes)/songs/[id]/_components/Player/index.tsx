"use client";

import { useSong } from "@/app/_services/song";
import { HeartIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

interface PlayerProps {
  songId: number;
}

const Player = ({ songId }: PlayerProps) => {
  const { data } = useSong(songId);
  return (
    <div>
      <Image
        alt=""
        className="rounded-[5px] border border-[#666666]"
        height={204}
        src={`/assets/images/${data?.song.files.coverArt}`}
        width={204}
      />
      <div>
        <div>
          <button className="h-16 w-16 rounded-full bg-white p-4 text-black">
            <PlayIcon size={32} />
          </button>

          <div>
            <div className="flex items-center gap-5">
              <h1 className="text-[2rem] font-medium">{data?.song.title}</h1>
              <button>
                <HeartIcon size={16} />
              </button>
            </div>
            <p className="font-medium">
              {data?.song.artist} &nbsp;&nbsp;|&nbsp;&nbsp;
              {data?.song.album.title} &nbsp;&nbsp;|&nbsp;&nbsp;
              {data?.song.album.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
