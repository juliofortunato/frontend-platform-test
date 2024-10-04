import FiltersProvider from "@/app/_providers/FiltersProvider";
import Header from "../../_components/Header";
import FilterFavoritesButton from "./_components/FilterFavoritesButton";
import LibraryFilters from "./_components/LibraryFilters";
import SongList from "./_components/SongList";

export default function Home() {
  return (
    <main>
      <Header hideSearch />

      <FiltersProvider>
        <div className="container mx-auto space-y-10 px-4 py-12 sm:px-8">
          <div className="flex flex-col justify-between space-y-6 sm:flex-row sm:items-end lg:items-center lg:space-y-0">
            <div className="flex flex-col gap-1 sm:gap-3">
              <div className="flex items-center justify-between gap-2 sm:justify-start">
                <h1 className="shrink-0 text-[2rem] font-medium">
                  Your Library
                </h1>
                <FilterFavoritesButton />
              </div>
              <p className="font-medium text-white/50">
                You have 10 songs in your library
              </p>
            </div>

            <LibraryFilters />
          </div>
          <SongList />
        </div>
      </FiltersProvider>
    </main>
  );
}
