"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isWatchPage = pathname.startsWith("/watch");

  return (
    <html lang="en">
      <body className="overflow-x-hidden text-white bg-black">
        <div className="flex min-h-screen">
          {!isWatchPage && (
            <aside className="fixed top-0 left-0 w-64 h-screen p-6 bg-black border-r border-gray-800">
              <h1 className="mb-10 text-xl font-bold text-green-400">
                MovieFun
              </h1>

              <nav className="space-y-4 text-gray-300">
                <Link href="/" className="block hover:text-white">
                  🏠 Home
                </Link>
                <Link href="/" className="block hover:text-white">
                  📺 TV Show
                </Link>
                <Link href="/" className="block hover:text-white">
                  🎬 Movie
                </Link>
                <Link href="/" className="block hover:text-white">
                  🎨 Animation
                </Link>
                <Link href="/" className="block hover:text-white">
                  🔥 Most Watched
                </Link>
              </nav>
            </aside>
          )}

          <main className={`${!isWatchPage ? "ml-64" : ""} flex-1 min-w-0`}>
     
            {!isWatchPage && (
              <div className="sticky top-0 z-50 p-6 bg-black border-b border-gray-800">
                <input
                  placeholder="Search movies / TV Shows"
                  className="w-full px-5 py-3 bg-gray-900 rounded-lg outline-none"
                />
              </div>
            )}
            
            <div className={`${isWatchPage ? "" : "px-12 py-10"}`}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
