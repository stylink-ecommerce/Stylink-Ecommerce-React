const HomePage = () => {
  return (
    <>
      {/* features box */}

      <section className="contain flex h-screen items-center justify-center">
        <div className="features-box">
          {/* features gradients */}
          <div className="features-gradients overflow-hidden">
            {/* gradient 1 */}
            <div className="features-gradient-1"></div>
            <div className="features-gradient-2"></div>
            <div className="features-gradient-3"></div>
          </div>
          <div className="relative z-0">
            <h1 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">Be</h1>
            <h2 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">The Creator</h2>
            <h2 className="features-title text-5xl opacity-80 sm:text-6xl md:text-7xl lg:text-[7rem] 2xl:text-[10rem]">Of What You Want</h2>
          </div>
        </div>
      </section>
      <h1>Home Page</h1>
    </>
  );
};

export default HomePage;
