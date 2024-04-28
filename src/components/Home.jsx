import { useLoaderData } from "react-router-dom";
import PaintingCard from "./PaintingCard";
// import Footer from "./Footer";

const Home = () => {
  const paintings = useLoaderData();
  return (
    <div className="container mx-auto pt-28 px-7">
      <div className="w-full carousel">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <img
            src="https://i.ibb.co/ydh3PRh/painted-natural-scenery-with-high-mountains-free-photo.png"
            className="w-full h-[500px]"
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
            className="w-full h-[500px"
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
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full h-[500px]"
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
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full h-[500px]"
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
      <div className="text-center">
      <h2 className="text-5xl font-extrabold text-center">Our Collections</h2>
     <p>about our website................</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
      {
        paintings.map(painting=><PaintingCard key={painting._id} painting={painting}></PaintingCard>)

      }
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
