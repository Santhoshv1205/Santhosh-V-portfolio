const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">

          {/* LOGO / NAME */}
          <div className="text-sm tracking-widest font-medium hidden md:block">
            SANTHOSH V
          </div>

          {/* NAV LINKS */}
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-white/80">Home</a>
            <a href="#education" className="hover:text-white/80">Education</a>
            <a href="#projects" className="hover:text-white/80">Projects</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </nav>

      {/* MOBILE NAME (BELOW NAVBAR) */}
      <div className="md:hidden pt-20 text-center text-white">
        <p className="text-sm tracking-widest font-medium">
          SANTHOSH V
        </p>
      </div>
    </>
  );
};

export default Navbar;
