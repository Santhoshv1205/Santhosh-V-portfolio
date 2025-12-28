const Publications = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="publications"
      className="max-w-6xl mx-auto px-6 pt-6 pb-56 min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Publications
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
        
        {/* Publication 1 */}
        <div className="h-full flex flex-col justify-between rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              A Sentimental Analysis Approach for Personalized Drug
              Recommendations Using Machine Learning
            </h3>

            <p className="mt-2 text-white/70">
              ICDDS 2024 · IEEE · June 2024
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() =>
                openLink(
                  "https://ieeexplore.ieee.org/document/10560460"
                )
              }
              className="px-5 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-cyan-300 transition"
            >
              View Publication
            </button>
          </div>
        </div>

        {/* Publication 2 */}
        <div className="h-full flex flex-col justify-between rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-purple-300 transition">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              A Comparative Analysis on AI-Driven Speech Protection
              Approaches
            </h3>

            <p className="mt-2 text-white/70">
              ICDICI 2024 · IEEE · December 2024
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() =>
                openLink(
                  "https://ieeexplore.ieee.org/document/10810982"
                )
              }
              className="px-5 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-purple-300 transition"
            >
              View Publication
            </button>
          </div>
        </div>

        {/* Publication 3 */}
        <div className="h-full flex flex-col justify-between rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-pink-300 transition">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Artificial Intelligence Enhanced Virtual Reality Surgery
              Training
            </h3>

            <p className="mt-2 text-white/70">
              RMKMATE’25 · June 2025
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() =>
                openLink(
                  "https://ieeexplore.ieee.org/document/11042515"
                )
              }
              className="px-5 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-pink-300 transition"
            >
              View Publication
            </button>
          </div>
        </div>

        {/* Patent */}
        <div className="h-full flex flex-col justify-between rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-yellow-300 transition">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Human Tracking Bot Using Sensor Fusion
            </h3>

            <p className="mt-2 text-white/70">
              Indian Patent · Published · 2024
            </p>

            <p className="mt-3 text-white/80 font-medium">
              Application No: 202541013177
            </p>
          </div>

          <div className="mt-6">
            <button className="px-5 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-yellow-300 transition cursor-default">
              Patent Published
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;
