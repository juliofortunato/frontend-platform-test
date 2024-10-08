import Player from "./_components/Player";
import RelatedAlbums from "./_components/RelatedAlbums";

interface SongPageProps {
  params: {
    id: string;
  };
}

const SongPage = ({ params: { id } }: SongPageProps) => {
  return (
    <div className="container relative mx-auto px-8 pb-16">
      <div className="py-20">
        <Player songId={Number(id)} />
      </div>

      <RelatedAlbums songId={Number(id)} />
    </div>
  );
};

export default SongPage;
