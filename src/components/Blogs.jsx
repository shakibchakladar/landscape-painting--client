const Blogs = () => {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://i.ibb.co/NKfGdZY/240-F-697719325-ek-TMOWi-Sppm-WNs-Bc8u43-R6n-Mq-Ni8h-Ho-X.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to our Glove Gallery Blogs page
            </h1>

            <button className="btn bg-sky-300">Explore more</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-7">
        {/* card */}
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Tr2c9yV/images-1.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Natural feel of Art </h2>
            <p>
              its feels you very well like natural. The daily grind and drudgery
              associated with plying your trade in an “office space”
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/fDQtMN3/download.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Special Unveiling of 568 N. Tigertail Road
            </h2>
            <p>
              Our Principal and Partner, Samuel McMillan, recently celebrated
              the unveiling of 568 N. Tigertail Road, a newly-constructed
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/wRC6R6V/images-3.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Our Agents Own13 Real Trends of “The Thousand 2017”
            </h2>
            <p>
              The daily grind and drudgery associated with plying your trade in
              an “office space” has been much maligned, and rightly so. As our
              MARCH 15, 2021
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/fDQtMN3/download.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              How We Build a Better LA for Fifth Year in a Row
            </h2>
            <p>
              Last week, we partnered with Habitat for Humanity of Greater Los
              Angeles (Habitat LA) for the fifth year in a row for a build day
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/wRC6R6V/images-3.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Special Unveiling of 568 N. Tigertail Road
            </h2>
            <p>
              The Agency is pleased to announce the sale of 24 Cherokee Road for
              $7.625 million—the highest-priced residential sale in Turks and
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
        <div className="shadow-xl card w-96 bg-base-100 hover:bg-green-300">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/zZnDZqT/birmingham-museums-trust-8wco-Y3wcb-L0-unsplash.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">
              Stunning Office in Culver City Designed by Paul McClean
            </h2>
            <p>
              The daily grind and drudgery associated with plying your trade in
              an “office space” has been much maligned, and rightly so. As our
            </p>
            <div className="card-actions">
              <button className="bg-purple-200 btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
