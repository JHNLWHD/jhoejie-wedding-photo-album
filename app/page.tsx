import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import photos from "@/photos";

export default function Home() {
  return (
      <div className="min-h-screen">
          <header className="py-8 text-center">
              <h1 className="text-2xl font-bold header-title text-gray-900">
                  JhoeJie Wedding Photo Album | Beautiful Civil Wedding Memories
              </h1>
          </header>
          <main>
              <MasonryPhotoAlbum photos={photos} />
          </main>
      </div>
  );
}
