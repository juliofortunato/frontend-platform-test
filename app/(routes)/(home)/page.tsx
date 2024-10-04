import FavoritesButton from "@/app/_components/FavoritesButton";
import Header from "../../_components/Header";
import LibraryFilters from "./_components/LibraryFilters";
import SongList from "./_components/SongList";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container mx-auto flex flex-col gap-10 pt-12">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-[2rem] font-medium">Your Library</h1>
              <FavoritesButton />
            </div>
            <p className="font-medium text-white/50">
              You have 10 songs in your library
            </p>
          </div>

          <LibraryFilters />
        </div>
        <SongList />
      </div>
    </>
  );
}
