import Player from "./_components/Player";

interface SongPageProps {
  params: {
    id: string;
  };
}

const SongPage = ({ params: { id } }: SongPageProps) => {
  return <Player songId={Number(id)} />;
};

export default SongPage;
