import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [navbarBg, setNavbarBg] = useState("transparent"); // State to track navbar background

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;
      const navbarHeight = document.getElementById("navbar").offsetHeight; // Get navbar height

      // Change navbar background based on scroll position
      if (window.scrollY >= navbarHeight) {
        setNavbarBg(
          "bg-gradient-to-r from-white via-gray-50 to-white shadow-md border-b border-gray-200"
        );
      } else {
        setNavbarBg("transparent");
      }

      // Determine the active section based on scroll position
      const sections = [
        "home",
        "skills",
        "experience",
        "services",
        "projects",
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
    <header
      id="navbar"
      className={`fixed inset-x-0 top-0 z-50 ${navbarBg} transition-all duration-300`}
    >
      <nav
        className="flex items-center justify-between px-4 py-4 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="text-2xl font-bold text-black">
            AFAQ DEV
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-10">
          {[
            "Home",
            "Skills",
            "Experience",
            "Services",
            "Projects",
            "Contact",
          ].map((link) => (
            <a
              href={`/#${link.toLowerCase()}`}
              key={link}
              className={`text-md font-semibold hover:text-black transition-colors duration-300 ease-in-out ${
                activeSection === link.toLowerCase()
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/afaq-cv.pdf"
            download="afaq-cv.pdf"
            className="flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Resume <FaDownload />
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white border-l border-gray-200 p-6 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {isMobileMenuOpen && (
          <>
            <div className="flex items-center justify-between">
              <a href="#" className="sr-only">
                AFAQ DEV
              </a>
              <button
                type="button"
                className="text-gray-600 focus:outline-none ml-auto"
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
            <div className="mt-8">
              {[
                "Home",
                "Skills",
                "Experience",
                "Services",
                "Projects",
                "Contact",
              ].map((link) => (
                <a
                  href={`/#${link.toLowerCase()}`}
                  key={link}
                  className="block text-lg font-medium text-gray-600 hover:text-black py-2"
                >
                  {link}
                </a>
              ))}
              <div className="w-1/2 mt-3">
                <a
                  href="/afaq-cv"
                  download="afaq-cv.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
                >
                  Resume <FaDownload />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
