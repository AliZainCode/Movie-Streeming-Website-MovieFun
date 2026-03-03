import { getHomepage } from "../services/api";
import HeroSlider from "../components/HeroSlider";
import RowSlider from "../components/RowSlider";

export default async function Home() {
  const data = await getHomepage();
  const items = data?.results || [];

  const hasGenre = (item, genre) =>
    item.genre?.toLowerCase().includes(genre.toLowerCase());

  const sections = [
    { title: "🔥 Trending Now", items: items.slice(0, 20) },
    { title: "🔥 Trending in Cinema", items: items.slice(20, 40) },
    { title: "Hot Short TV", items: items.slice(20, 30) },
    { title: "Comedy", items: items.filter((i) => hasGenre(i, "comedy")) },
    { title: "Romance", items: items.filter((i) => hasGenre(i, "romance")) },
    { title: "Anime", items: items.filter((i) => hasGenre(i, "anime")) },
  ].filter((section) => section.items.length);

  return (
    <div>

      <HeroSlider items={items.slice(0, 5)} />

      <div className="p-6 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-xl font-bold">{section.title}</h2>

            <RowSlider items={section.items} />
          </div>
        ))}
      </div>
    </div>
  );
}
