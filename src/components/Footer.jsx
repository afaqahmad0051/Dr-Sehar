import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 via-gray-50 to-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Footer Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
          {/* Brand and About */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-black">
              Sehar Basheer
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Chemistry Researcher & Educator passionate about advancing
              scientific knowledge through innovative research and dedicated
              teaching.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-gray-600">PhD Chemistry Candidate</p>
              <p className="text-sm text-gray-600">
                University of Education, Lahore
              </p>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-gray-300 my-8"></div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-black text-center sm:text-left">
              Stay Connected
            </h3>
            <div className="mt-4 flex justify-center gap-6">
              <a
                href="mailto:seharbashir434@gmail.com"
                target="_blank"
                className="text-gray-600 hover:text-black transition duration-300"
                title="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sehar-basheer"
                target="_blank"
                className="text-gray-600 hover:text-black transition duration-300"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/seharbasheer"
                target="_blank"
                className="text-gray-600 hover:text-black transition duration-300"
                title="Research Profile"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-4 text-center sm:text-left">
              <p className="text-sm text-gray-600">seharbashir434@gmail.com</p>
              <p className="text-sm text-gray-600">(+92) 3034614066</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
