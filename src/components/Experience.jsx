const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 pt-20 pb-56 min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Experience & Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Internship */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <h3 className="text-xl font-semibold mb-2">
            Internship
          </h3>

          <p className="font-medium text-white">
            Cadpoint Engineering Solutions Pvt. Ltd.
          </p>

          <p className="mt-1 text-white/70">
            June 2024
          </p>

          <p className="mt-4 text-white/80 leading-relaxed">
            Gained hands-on experience working in an engineering-focused
            professional environment, contributing to technical tasks and
            improving practical understanding of software and system workflows.
          </p>
        </div>

        {/* Achievements */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-purple-300 transition">
          <h3 className="text-xl font-semibold mb-4">
            Achievements
          </h3>

          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li>
              First Prize – Paper Presentation (Velammal Institute of Technology, 2025)
            </li>
            <li>
              Finalist – I-Cube 4.0 (Sri Venkateswara College of Engineering, 2025)
            </li>
            <li>
              Pre-Finalist – Startup Café (Anna University, 2024)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
