import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  onChange: (value: string) => void;
  value: string;
}

const SearchInput = ({ onChange, value }: SearchInputProps) => {
  return (
    <div className="flex w-full max-w-[360px] items-center gap-2 rounded-lg bg-white/15 p-2 text-white transition-colors focus-within:bg-white/25 hover:bg-white/25">
      <SearchIcon size={20} />
      <input
        className="bg-transparent pt-1 text-[1rem] leading-none placeholder:text-white focus:outline-none focus:ring-0"
        type="text"
        placeholder="Search in your library"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
