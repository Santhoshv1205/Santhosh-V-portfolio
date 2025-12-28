const Education = () => {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 pb-40"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Education
      </h2>

      <div className="space-y-8">
        {/* College */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <h3 className="text-xl font-semibold">
            R.M.K Engineering College
          </h3>

          <p className="mt-2 text-white/90">
            Bachelor of Technology – Information Technology
          </p>

          <p className="mt-1 text-white/80">
            CGPA: 7.67 / 10 (Till 6th Semester)
          </p>

          <p className="mt-1 text-white/80">
            Minor Degree in Internet of Things (IoT)
          </p>

          <p className="mt-1 text-white/70">
            Expected Graduation: May 2026
          </p>
        </div>

        {/* HSC */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-purple-300 transition">
          <h3 className="text-xl font-semibold">
            R.M.K Matriculation Higher Secondary School
          </h3>

          <p className="mt-2 text-white/90">
            Higher Secondary Certificate (HSC)
          </p>

          <p className="mt-1 text-white/80">
            Percentage: 73.4%
          </p>

          <p className="mt-1 text-white/70">
            Year of Completion: 2022
          </p>
        </div>

        {/* SSLC */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-pink-300 transition">
          <h3 className="text-xl font-semibold">
            Sri Sakthi Matriculation School
          </h3>

          <p className="mt-2 text-white/90">
            Secondary School Leaving Certificate (SSLC)
          </p>

          <p className="mt-1 text-white/80">
            Percentage: 71%
          </p>

          <p className="mt-1 text-white/70">
            Year of Completion: 2020
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
