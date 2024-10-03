import Image from "next/image";
import Link from "next/link";
import SearchInput from "../SearchInput";

interface HeaderProps {
  hideSearch?: boolean;
}

const Header = ({ hideSearch }: HeaderProps) => {
  return (
    <header className="w-full bg-cod-gray py-7 text-xl">
      <div className="container mx-auto flex items-center gap-[54px]">
        <Link href="/">
          <Image src="/logo.svg" alt="MUSE.ai" width={87} height={22} />
        </Link>

        {!hideSearch && <SearchInput />}
      </div>
    </header>
  );
};

export default Header;
