import { useEffect, useState } from "react";
import {
  Home,
  GraduationCap,
  Wrench,
  FolderKanban,
  BookOpen,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

/* 🔹 Smooth scroll */
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const CurvedSideNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div
        className="
          h-[550px]
          w-16
          bg-white/10
          backdrop-blur
          border
          border-white/20
          rounded-l-[40px]
          flex
          flex-col
          justify-center
          gap-5
          px-3
        "
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <div key={id} className="relative group flex justify-end">
              {/* TOOLTIP */}
              <span
                className="
                  absolute
                  right-14
                  top-1/2
                  -translate-y-1/2
                  whitespace-nowrap
                  px-4
                  py-2
                  rounded-lg
                  bg-[#0f172a]
                  text-white
                  text-sm
                  opacity-0
                  translate-x-4
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-300
                  shadow-xl
                  pointer-events-none
                "
              >
                {label}
              </span>

              {/* ICON */}
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  w-10 h-10
                  flex items-center justify-center
                  rounded-xl
                  transition-all
                  ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-300"
                      : "text-white/70 hover:text-cyan-300 hover:bg-white/10"
                  }
                `}
              >
                <Icon size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurvedSideNav;
