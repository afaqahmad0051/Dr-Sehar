import { useState } from "react";
import { Particles } from "./Particles/Particles";

const Hero = () => {
  const [particleQuantity] = useState(() => {
    return window.innerWidth <= 768 ? 100 : 365;
  });

  return (
    <div
      id="home"
      className="relative animate-fadeIn bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full h-screen text-black flex items-center justify-center pt-20"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Decorative lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40"></div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-20 w-16 h-16 border-l-2 border-t-2 border-gray-300 opacity-30"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-r-2 border-t-2 border-gray-300 opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border-l-2 border-b-2 border-gray-300 opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-r-2 border-b-2 border-gray-300 opacity-30"></div>
      </div>

      <div className="absolute inset-0 bg-opacity-10 bg-black mix-blend-overlay"></div>

      <div className="z-10 max-w-4xl text-center px-8 mx-auto">
        {/* Decorative top element */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-px bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-8 h-px bg-black"></div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-4 mb-4">
          <span className="relative">
            Dr.{" "}
            <span className="text-black relative">
              Sehar Basheer
              {/* Subtle accent under the name */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black opacity-20"></div>
            </span>
          </span>
        </h1>

        {/* Professional title badge */}
        <div className="inline-block mb-6">
          <div className="px-4 py-2 border border-gray-400 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              PhD Chemistry Candidate
            </span>
          </div>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-700 mx-auto max-w-3xl">
          <span className="text-black font-semibold">
            Chemistry Researcher & Educator
          </span>{" "}
          dedicated to advancing scientific knowledge through cutting-edge
          research, innovative teaching methodologies, and inspiring the next
          generation of chemists.
        </p>

        <div className="mt-10">
          <a
            href="mailto:seharbashir434@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-10 py-4 text-lg font-semibold bg-black hover:bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-black rounded-full opacity-60"></div>
            <div className="w-1 h-1 bg-gray-600 rounded-full opacity-40"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      <Particles quantity={particleQuantity} ease={100} color={"#000000"} />
    </div>
  );
};

export default Hero;
