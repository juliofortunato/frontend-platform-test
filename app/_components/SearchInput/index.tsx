import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <form className="flex w-full max-w-[360px] items-center gap-2 rounded-lg bg-white/15 p-2 text-white transition-colors focus-within:bg-white/25">
      <SearchIcon size={20} />
      <input
        className="bg-transparent text-[1rem] placeholder:text-white focus:outline-none focus:ring-0"
        type="text"
        placeholder="Search in your library"
      />
    </form>
  );
};

export default SearchInput;
