import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CurvedSideNav from "./components/CurvedSideNav";

const App = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#0b1020",
        backgroundImage: `
          radial-gradient(at top left, rgba(125,211,252,0.45), transparent 55%),
          radial-gradient(at bottom right, rgba(196,181,253,0.45), transparent 55%),
          radial-gradient(at center, rgba(251,207,232,0.25), transparent 60%)
        `,
      }}
    >
      <Navbar />
      <CurvedSideNav />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Experience />
      <Certifications />
      <Contact />

    </div>
  );
};

export default App;
