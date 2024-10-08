import AutoComplete from "@/app/(routes)/songs/[id]/_components/Autocomplete";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  hideSearch?: boolean;
}

const Header = ({ hideSearch }: HeaderProps) => {
  return (
    <header className="flex min-h-[72px] w-full bg-cod-gray py-4 text-xl sm:min-h-[96px] sm:py-7">
      <div className="container mx-auto flex items-center justify-between gap-[54px] px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="MUSE.ai"
            width={87}
            height={22}
            className="h-auto w-full"
          />
        </Link>

        {!hideSearch && <AutoComplete />}
      </div>
    </header>
  );
};

export default Header;
