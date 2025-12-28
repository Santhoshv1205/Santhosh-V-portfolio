import { Mail, Linkedin, Github, Copy, Check, Download } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("santhoshv120505@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 pt-24 pb-28 text-white"
    >
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Contact
      </h2>

      <p className="text-white/80 max-w-xl mb-10">
        Open to internships, full-time roles, and collaborative projects.
        Let’s build something meaningful together.
      </p>

      {/* SOCIAL PROOF */}
      <p className="text-white/70 mb-10">
        🏆 IEEE Author · Patent Holder
      </p>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* EMAIL */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold">
            <Mail size={18} />
            Email
          </div>

          <div className="flex items-center justify-between gap-3">
            <a
              href="mailto:santhoshv120505@gmail.com"
              className="text-cyan-300 hover:underline transition"
              title="Click to send mail"
            >
              santhoshv120505@gmail.com
            </a>

            <button
              onClick={handleCopy}
              title="Click to copy"
              className="text-white/70 hover:text-cyan-300 transition"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        {/* LINKEDIN */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold">
            <Linkedin size={18} />
            LinkedIn
          </div>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline transition"
          >
            View Profile
          </a>
        </div>

        {/* GITHUB */}
        <div className="rounded-2xl p-6 backdrop-blur bg-white/10 border border-white/20 hover:border-cyan-300 transition">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold">
            <Github size={18} />
            GitHub
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline transition"
          >
            View Repositories
          </a>
        </div>
      </div>

      {/* LOCATION + RESUME */}
      <div className="flex flex-wrap gap-4">
        <div className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white/90">
          🌍 Open to Remote / Hybrid / On-site
        </div>

        <a
          href="/Santhosh%20V_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:border-cyan-300 transition text-white"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-white/60 text-sm">
        © 2025 Santhosh V. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
