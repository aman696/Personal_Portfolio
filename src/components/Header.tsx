import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Common navigation links
  const navLinks = (
    <>
      <a
        href="#hero"
        onClick={() => setMenuOpen(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Home
      </a>
      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Experience
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Projects
      </a>
      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Skills
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Contact
      </a>
      <a
        href="/Aman_Resume.pdf"
        download
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-1 border border-cyan-500 text-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-500 hover:text-black transition-colors"
      >
        Download CV <Download className="h-4 w-4" />
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-hero-bg bg-opacity-80 backdrop-blur-sm z-50">
      {/* Desktop Header: Centered Logo & Navigation */}
      <div className="hidden md:flex flex-col items-center justify-center px-4 py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
        </div>
        <nav className="flex items-center justify-center space-x-6 mt-2">
          {navLinks}
        </nav>
      </div>

      {/* Mobile Header: Logo on left, Hamburger on right */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
        </div>
        <button
          onClick={toggleMenu}
          className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-hero-bg bg-opacity-90 backdrop-blur-sm px-4 py-4 flex flex-col space-y-4">
          {navLinks}
        </nav>
      )}
    </header>
  );
};

export default Header;
