import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/sehar-cv.pdf";
    link.download = "Sehar_Basheer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      // Determine the active section based on scroll position
      const sections = [
        "home",
        "education",
        "experience",
        "research",
        "publications",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - Centered */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-8 py-3 shadow-lg">
          <div className="flex items-center gap-8">
            {[
              { name: "Home", id: "home" },
              { name: "Education", id: "education" },
              { name: "Experience", id: "experience" },
              { name: "Research", id: "research" },
              { name: "Publications", id: "publications" },
              { name: "Contact", id: "contact" },
            ].map((link) => (
              <a
                href={`#${link.id}`}
                key={link.name}
                className={`text-sm font-medium transition-all duration-300 ease-in-out px-4 py-2 rounded-full ${
                  activeSection === link.id
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-black hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Brand/Logo - Show on hero section for mobile, always show on desktop */}
      <div
        className={`fixed top-4 left-4 z-40 transition-opacity duration-300 ${
          activeSection === "home" ? "block" : "hidden"
        } lg:block`}
      >
        <a
          href="#home"
          className="text-xl font-bold text-black hover:text-gray-700 transition-colors duration-300"
        >
          SEHAR BASHEER
        </a>
      </div>

      {/* Mobile Navigation Button - Positioned in Right Corner */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          type="button"
          className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full p-3 shadow-lg text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="text-lg" />
        </button>
      </div>

      {/* Resume Button - Positioned in Right Corner (Desktop Only) */}
      <div className="fixed top-4 right-4 z-50 hidden lg:block">
        <button
          onClick={handleResumeDownload}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Resume <FaDownload className="text-xs" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white/95 backdrop-blur-md border-l border-gray-200 p-6 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        {isMobileMenuOpen && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold text-black">Navigation</h3>
              <button
                type="button"
                className="text-gray-600 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "Education", id: "education" },
                { name: "Experience", id: "experience" },
                { name: "Research", id: "research" },
                { name: "Publications", id: "publications" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <a
                  href={`#${link.id}`}
                  key={link.name}
                  className="block text-lg font-medium text-gray-700 hover:text-black py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={(e) => {
                    handleResumeDownload(e);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
                >
                  Resume <FaDownload />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
