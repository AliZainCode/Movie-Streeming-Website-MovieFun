import { getMovieDetail } from "../../../services/api";

export const dynamic = "force-dynamic";

export default async function WatchPage({ params }) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full h-screen">
        <iframe
          src={movie.play_url}
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}