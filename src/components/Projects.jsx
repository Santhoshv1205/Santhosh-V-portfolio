const Projects = () => {
  const projects = [
    {
      title: "Human Tracking Bot Using Sensor Fusion",
      desc: "A patented robotics system that tracks human movement using multi-sensor fusion and real-time motor control for autonomous navigation.",
      tags: ["Robotics", "IoT", "Sensor Fusion", "Embedded Systems"],
      border: "border-cyan-300/60",
      demo: "https://github.com/Santhoshv1205/Human-Tracking-Bot-Using-Sensor-Fusion",
      github: "https://github.com/Santhoshv1205/Human-Tracking-Bot-Using-Sensor-Fusion",
      extra: "Patent Published · Application No: 202541013177",
    },
    {
      title: "CertifyPro – Certificate Management System",
      desc: "A full-stack web application that manages student certificates with backend APIs, database integration, and CRUD operations.",
      tags: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Maven"],
      border: "border-white/20",
      demo: null,
      github: null,
    },
    {
      title: "Human Stress–Environment Feedback Loop System (HSE-FLS)",
      desc: "An IoT-based real-time monitoring system that analyzes environmental and human stress parameters using sensor data, with live visualization through a connected dashboard.",
      tags: ["ESP32", "IoT", "Sensor Fusion", "Firebase", "React", "Wokwi"],
      border: "border-green-300/40",
      demo: "https://hse-fls.web.app/",
      github: "https://github.com/Santhoshv1205/HSE-FLS",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-40" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 backdrop-blur bg-white/10 border ${p.border} 
            transition duration-300 hover:scale-[1.03] hover:shadow-xl`}
          >
            <h3 className="text-xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-white/80 mb-4 leading-relaxed">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {p.extra && (
              <p className="text-white font-medium mb-4">
                {p.extra}
              </p>
            )}

            <div className="flex gap-3">
              {/* Live Demo */}
              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-400/20 border border-cyan-300 hover:bg-cyan-400/30 transition"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 rounded-lg bg-gray-500/20 border border-gray-400/30 text-gray-400 cursor-not-allowed"
                >
                  No Demo
                </button>
              )}

              {/* GitHub */}
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-white transition"
                >
                  GitHub
                </a>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 rounded-lg bg-gray-500/20 border border-gray-400/30 text-gray-400 cursor-not-allowed"
                >
                  Private Repo
                </button>
              )}
            </div>
          </div>
        ))}

        {/* RMK ZapOut */}
        <div
          className="md:col-span-2 rounded-2xl p-6 backdrop-blur bg-white/10 border border-yellow-300/40 
          transition duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-3">
            RMK ZapOut – Role-Based Campus Workflow Automation System
          </h3>

          <p className="text-white/80 mb-4 leading-relaxed">
            A full-stack workflow automation system designed to manage gate pass and on-duty processes with real-time approvals, role-based authorization, and audit tracking.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MySQL",
              "Role-Based Authorization",
              "API Integration",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/Santhoshv1205/RMK-ZapOut"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/30 hover:border-white transition"
            >
              GitHub
            </a>

            <button
              disabled
              className="px-4 py-2 rounded-lg bg-gray-500/20 border border-gray-400/30 text-gray-400 cursor-not-allowed"
            >
              Demo Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;