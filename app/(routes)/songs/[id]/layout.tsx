import Header from "@/app/_components/Header";

export default function SongLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-firefly min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}
