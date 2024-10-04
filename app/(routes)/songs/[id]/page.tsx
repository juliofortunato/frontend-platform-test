import Player from "./_components/Player";
import RelatedAlbums from "./_components/RelatedAlbums";

interface SongPageProps {
  params: {
    id: string;
  };
}

const SongPage = ({ params: { id } }: SongPageProps) => {
  return (
    <>
      <Player songId={Number(id)} />
      <RelatedAlbums songId={Number(id)} />
    </>
  );
};

export default SongPage;
