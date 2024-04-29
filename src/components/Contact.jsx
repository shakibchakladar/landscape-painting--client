const Contact = () => {
  return (
    <div>
      <div
        className="min-h-[500px] hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/cYhddfz/download-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-green-400">
              Contact us
            </h1>
          </div>
        </div>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto text-gray-100 bg-gray-800 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-400 dark:text-gray-800">
              If you need any information. please message us
            </div>
          </div>
          <img
            src="https://i.ibb.co/5X382F8/images-2.jpg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 bg-gray-800 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 bg-gray-800 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 bg-gray-800 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide text-gray-900 uppercase rounded bg-violet-400 dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
