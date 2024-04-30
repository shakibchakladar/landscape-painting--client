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
            className="w-full md:h-[700px]"
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
            className="w-full md:h-[700px]"
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
            className="w-full md:h-[700px]"
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
            className="w-full md:h-[700px]"
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
        {paintings?.map((painting) => (
          <PaintingCard key={painting._id} painting={painting}></PaintingCard>
        ))}
      </div>
      <div className="p-8 space-y-8 text-center">
        <h2 className="text-5xl">Why Chose Us</h2>
        <p>
          At Grove Gallery, we're passionate about nurturing the landscape
          artist within you. Here's what sets us apart and makes us the perfect
          partner for capturing nature's beauty on canvas:
        </p>
      </div>
      <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src="https://i.ibb.co/tmWS1Tp/Gemini-Generated-Image-u7yk7yu7yk7yu7yk.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Why Choose Grove Gallery</h1>
      <p className="py-6">Grove Gallery is your gateway to a world of captivating landscapes. Let us help you bring the beauty of nature into your life, whether through acquiring a breathtaking artwork or finding the tools and inspiration to create your own.</p>
    </div>
  </div>
</div>
<div className="rounded-md p-14 bg-stone-600">
  <h2 className="text-4xl text-center text-white ">What People Say</h2>
</div>
<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
<div className="p-10 m-4 hero bg-base-200 rounded-xl">
  <div className="flex-col hero-content lg:flex-row-reverse rounded-xl">
    <img src="https://i.ibb.co/Km590Ry/pexels-photo-7176297.jpg" className="w-1/2 max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-5xl font-bold">Kate Anderson</h1>
      <p className="py-6">Your property managers have been active in their response to repairs and always patient with our frustrations. You have always found us wonderful tenants.</p>
    </div>
  </div>
</div>
<div className="p-10 m-4 hero bg-base-200 rounded-s-xl">
  <div className="flex-col hero-content lg:flex-row-reverse rounded-xl">
    <img src="https://i.ibb.co/R2qPtZH/pexels-shvets-production-7176319.jpg" className="w-1/2 max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Walter Williams</h1>
      <p className="py-6">We recently rented an apartment through your site, and have been looked after by James Thompson. He provided us with utmost support on every property issue.</p>
    </div>
  </div>
</div>
<div className="p-10 m-4 hero bg-base-200 rounded-xl">
  <div className="flex-col hero-content lg:flex-row-reverse rounded-xl">
    <img src="https://i.ibb.co/xhpyF12/pexels-photo-7176320.jpg" className="w-1/2 max-w-sm rounded-lg shadow-2xl h-1/2" />
    <div>
      <h1 className="text-5xl font-bold">Lora</h1>
      <p className="py-6">I have always found your team to be extremely prompt and professional with all dealings I have had with them. You always keep me updated on the progress.</p>
    </div>
  </div>
</div>
<div className="p-10 m-4 hero bg-base-200 rounded-xl">
  <div className="flex-col hero-content lg:flex-row-reverse rounded-xl">
    <img src="https://i.ibb.co/XbX8Qtr/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Kate Anderson</h1>
      <p className="py-6">Your property managers have been active in their response to repairs and always patient with our frustrations. You have always found us wonderful tenants.</p>
    </div>
  </div>
</div>

</div>
    </div>
  );
};

export default Home;
