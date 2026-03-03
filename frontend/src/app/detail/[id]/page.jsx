import Link from "next/link";
import { getMovieDetail } from "../../../services/api";
import Image from "next/image";
import WatchButton from "../../../components/WatchButton";

export default async function DetailPage({ params }) {
  const { id } = await params;
  const movie = await getMovieDetail(id);

  return (
    <div className="text-white">
   
      <div className="relative w-full overflow-hidden h-96">
        {movie.trailer_url ? (
          <video
            src={movie.trailer_url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          />
        ) : (
          <img
            src={movie.cover_image}
            className="absolute inset-0 object-cover w-full h-full"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute max-w-3xl bottom-10 left-10">
          <h1 className="mb-3 text-4xl font-bold">{movie.title}</h1>

          <p className="mb-2 text-gray-300">
            ⭐ {movie.imdb} • {movie.release_date} • {movie.country}
          </p>

          <p className="mb-4 text-gray-400">{movie.genre}</p>

          <WatchButton id={id} />
        </div>
      </div>

      <div className="p-8 space-y-10">
        <div>
          <h2 className="mb-3 text-xl font-semibold">Overview</h2>
          <p className="max-w-4xl text-gray-300">{movie.description}</p>
        </div>

        <div className="pl-10">
          <h2 className="mb-4 text-xl font-semibold text-amber-300">
            Top Cast
          </h2>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {movie.cast?.slice(0, 50).map((actor, index) => (
              <div
                key={`${actor.staffId}-${index}`}
                className="min-w-[112px] flex-shrink-0 snap-start"
              >
                <div className="overflow-hidden bg-gray-800 rounded-lg w-28 h-36">
                  <Image
                    src={actor.avatarUrl || "/vercel.png"}
                    alt={actor.name}
                    width={112}
                    height={144}
                    className="object-cover"
                  />
                </div>

                <p className="mt-2 text-sm font-semibold truncate">
                  {actor.name}
                </p>

                <p className="text-xs text-gray-400 truncate">
                  {actor.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
