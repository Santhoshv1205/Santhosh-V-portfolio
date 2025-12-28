const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 pt-12 pb-56 min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Technical Skills & Tools */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <h3 className="text-xl font-semibold mb-4">
            Technical Skills & Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
              "GitHub",
              "VS Code",
              "MS Office",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-purple-300 transition">
          <h3 className="text-xl font-semibold mb-4">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Communication",
              "Teamwork",
              "Problem Solving",
              "Adaptability",
              "Time Management",
              "Critical Thinking",
              "Leadership",
              "Decision Making",
              "Work Ethic",
            ].map((soft) => (
              <span
                key={soft}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm"
              >
                {soft}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-pink-300 transition">
          <h3 className="text-xl font-semibold mb-4">
            Languages
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "English",
              "Tamil",
              "Telugu (Conversational)",
            ].map((lang) => (
              <span
                key={lang}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
