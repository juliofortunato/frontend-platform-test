import Header from "@/app/_components/Header";

export default function SongLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-[#12303B]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
