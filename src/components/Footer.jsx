import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Footer Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
          {/* Brand and About */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-white">Afaq Ahmad</h2>
            <p className="mt-4 text-sm">
              Creating innovative web and mobile solutions to help businesses
              thrive in the digital era.
            </p>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white text-center sm:text-left">
              Stay Connected
            </h3>
            <div className="mt-4 flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/afaq-ahmad12"
                target="_blank"
                className="text-gray-300 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/afaqahmad0051"
                target="_blank"
                className="text-gray-300 hover:text-gray-500 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
