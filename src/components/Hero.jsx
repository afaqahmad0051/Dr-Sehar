import { useState } from "react";
import { Particles } from "./Particles/Particles";

const Hero = () => {
  const [particleQuantity] = useState(() => {
    return window.innerWidth <= 768 ? 100 : 365;
  });

  return (
    <div
      id="home"
      className="relative animate-fadeIn bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full h-screen text-black flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-opacity-10 bg-black mix-blend-overlay"></div>
      <div className="z-10 max-w-4xl text-center px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-4">
          I&apos;m{" "}
          <span className="text-black border-b-4 border-black">Afaq Ahmad</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-700">
          A{" "}
          <span className="text-black font-semibold">Full Stack Developer</span>{" "}
          with a passion for creating stunning, responsive, and user-friendly
          websites.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hi@afaqahmad.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold bg-black hover:bg-gray-800 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>
      </div>
      <Particles quantity={particleQuantity} ease={100} color={"#000000"} />
    </div>
  );
};

export default Hero;
