const Projects = () => {
  const robotProjectLink =
    "https://github.com/Santhoshv1205/Human-Tracking-Bot-Using-Sensor-Fusion/tree/main/Robot";

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 pb-40"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Human Tracking Bot */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-cyan-300/60">
          <h3 className="text-xl font-semibold mb-3">
            Human Tracking Bot Using Sensor Fusion
          </h3>

          <p className="text-white/80 mb-4 leading-relaxed">
            A patented robotics project focused on developing a robust
            person-tracking system using sensor fusion techniques.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Robotics",
              "IoT",
              "Sensor Fusion",
              "Embedded Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-white font-medium mb-6">
            Patent Published · Application No: 202541013177
          </p>

          <div className="flex gap-4">
            <a
              href={robotProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-white/10 border border-white/30 hover:border-cyan-300 transition"
            >
              View Demo
            </a>

            <a
              href={robotProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-white/10 border border-white/30 hover:border-cyan-300 transition"
            >
              Patent Proof
            </a>
          </div>
        </div>

        {/* CertifyPro */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20">
          <h3 className="text-xl font-semibold mb-3">
            CertifyPro – Certificate Management System
          </h3>

          <p className="text-white/80 mb-4 leading-relaxed">
            A full-stack web application for managing student course
            certificates.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "MySQL",
              "HTML",
              "CSS",
              "JavaScript",
              "Maven",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RMK ZapOut */}
        <div className="md:col-span-2 rounded-2xl p-6 backdrop-blur bg-white/10 border border-yellow-300/40">
          <h3 className="text-xl font-semibold mb-2">
            RMK ZapOut – Smart Gate Pass & On-Duty Management System
            <span className="ml-2 text-sm text-yellow-300 font-medium">
              (In Development)
            </span>
          </h3>

          <p className="text-white/80 mb-4 leading-relaxed">
            A role-based campus management system designed to digitize
            gate pass and on-duty workflows with approvals and audit logs.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MySQL",
              "Role-Based Access",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
