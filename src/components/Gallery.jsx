import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/gallery6.png",
  "/images/gallery7.png",
  "/images/gallery8.png",
  "/images/gallery9.png",
  "/images/gallery10.png",
  "/images/gallery11.png",
  "/images/gallery12.png",
  "/images/gallery13.png",
  "/images/gallery14.png",
  "/images/gallery15.png",
  "/images/gallery16.png",
  "/images/gallery17.png",
  "/images/gallery18.png",
  "/images/gallery19.png",
  "/images/gallery20.png",
];

function Gallery() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Thư viện ảnh</h2>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img
                src={src}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-105"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}

export default Gallery;
