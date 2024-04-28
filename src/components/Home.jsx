import { useLoaderData } from "react-router-dom";
import PaintingCard from "./PaintingCard";
// import Footer from "./Footer";

const Home = () => {
  const paintings = useLoaderData();
  return (
    <div className="container mx-auto px-7">
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/ydh3PRh/painted-natural-scenery-with-high-mountains-free-photo.png"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/rwkQymN/edouard-tamba-9-ZFn-BKP-s-unsplash.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/McZWxmh/images-1.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/W5Hh43V/original-644fcac6994c57bf306c7252473c6ed9.png"
            className="w-full h-[700px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="p-10 space-y-4 text-center">
        <h2 className="text-5xl font-extrabold text-center">Our Collections</h2>
        <p>
          Welcome to Grove Gallery, where the beauty of nature meets the
          artistry of human expression. Explore our enchanting Landscape
          Painting category, where every stroke tells a story of the great
          outdoors. From tranquil groves to majestic mountainscapes, our curated
          collection brings the serenity and splendor of nature into your home.
          Embark on a journey through lush forests, serene lakes, and expansive
          vistas, and discover the perfect masterpiece to adorn your space. At
          Grove Gallery, immerse yourself in the beauty of landscapes captured
          on canvas, and let your imagination roam free amidst the wonders of
          nature.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {paintings.map((painting) => (
          <PaintingCard key={painting._id} painting={painting}></PaintingCard>
        ))}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
