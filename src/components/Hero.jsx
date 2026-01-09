const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-24 flex items-center text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* MOBILE IMAGE */}
        <div className="flex md:hidden justify-center mb-10">
          <div className="relative inline-block rounded-2xl border border-white/20 backdrop-blur">
            <img
              src="/profile.jpg"
              alt="Santhosh V"
              className="w-60 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div>
          <p className="text-base md:text-lg tracking-widest uppercase text-white">
            Hello, I’m
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Santhosh V
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-white">
            B.Tech Information Technology student passionate about building
            full-stack applications and research-driven engineering projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* BUTTON 1 */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:border-cyan-300 transition text-white"
            >
              View Projects
            </a>

            {/* BUTTON 2 — PUBLICATIONS */}
            <a
              href="#publications"
              className="px-6 py-3 rounded-lg bg-white/10 border-white/30 hover:border-purple-300 transition text-white"
            >
              View Publications
            </a>
          </div>
        </div>

        {/* DESKTOP IMAGE */}
        <div className="hidden md:flex justify-center">
          <div className="relative inline-block rounded-2xl border border-white/20 backdrop-blur">
            <img
              src="/profile.jpg"
              alt="Santhosh V"
              className="w-80 object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
