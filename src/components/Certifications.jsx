const Certifications = () => {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 pb-40"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Oracle */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <h3 className="text-lg font-semibold">
            Oracle Certified Cloud Foundation Associate
          </h3>
          <p className="mt-2 text-white/70">Oracle</p>
        </div>

        {/* Java */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-purple-300 transition">
          <h3 className="text-lg font-semibold">
            Programming using Java
          </h3>
          <p className="mt-2 text-white/70">Infosys</p>
        </div>

        {/* DBMS */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-pink-300 transition">
          <h3 className="text-lg font-semibold">
            Database Management System
          </h3>
          <p className="mt-2 text-white/70">Infosys</p>
        </div>

        {/* Data Visualization */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-yellow-300 transition">
          <h3 className="text-lg font-semibold">
            Data Visualization – Empowering Business with Effective Insights
          </h3>
          <p className="mt-2 text-white/70">Tata Group</p>
        </div>

        {/* NPTEL */}
        <div className="md:col-span-2 rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-green-300 transition">
          <h3 className="text-lg font-semibold">
            Operating System Fundamentals
          </h3>
          <p className="mt-2 text-white/70">NPTEL</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
