import Player from "./_components/Player";
import RelatedAlbums from "./_components/RelatedAlbums";

interface SongPageProps {
  params: {
    id: string;
  };
}

const SongPage = ({ params: { id } }: SongPageProps) => {
  return (
    <div className="container relative mx-auto mt-[73px]">
      <Player songId={Number(id)} />
      <RelatedAlbums songId={Number(id)} />
    </div>
  );
};

export default SongPage;
