import { useState } from "react";
import { Particles } from "./Particles/Particles";

const Hero = () => {

  const [particleQuantity, setParticleQuantity] = useState(() => {
    return window.innerWidth <= 768 ? 100 : 365;
  });

  const handleHireMeClick = () => {
    window.open("mailto:hi@afaqahmad.me", "_blank");
  };

  return (
    <div
      id="home"
      className="relative animate-fadeIn bg-gradient-to-br from-gray-800 via-gray-900 to-black w-full h-screen text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-opacity-50 bg-blue-800 mix-blend-overlay"></div>
      <div className="z-10 max-w-4xl text-center px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-4">
          I'm <span className="text-blue-500">Afaq Ahmad</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl leading-relaxed">
          A <span className="text-blue-500 font-semibold">Full Stack Developer</span>{" "}
          with a passion for creating stunning, responsive, and user-friendly
          websites.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hi@afaqahmad.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
      <Particles
        quantity={particleQuantity}
        ease={100}
        color={"#ffffff"}
      />
    </div>
  );
};

export default Hero;
