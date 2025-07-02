import { useState, useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaUserGraduate,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Chemistry Teacher",
    company: "AL-HAFIZ School System & Academy",
    duration: "2023 to 2025",
    location: "Lahore, Pakistan",
    description:
      "Currently teaching chemistry at secondary and higher secondary levels, developing curriculum and conducting laboratory experiments.",
    tasks: [
      "Teaching chemistry concepts to high school students",
      "Designing and conducting laboratory experiments",
      "Preparing students for board examinations",
      "Developing engaging teaching materials and methods",
    ],
    gradient: "from-gray-800 to-black",
  },
  {
    icon: <FaUserGraduate size={32} />,
    title: "Chemistry Lecturer",
    company: "National Science College for Girls",
    duration: "Nov 2021 to Sep 2022",
    location: "Gujranwala, Pakistan",
    description:
      "Delivered comprehensive chemistry lectures at college level, mentored students, and contributed to academic excellence.",
    tasks: [
      "Conducted lectures on advanced chemistry topics",
      "Supervised student research projects",
      "Mentored students for higher education pursuits",
      "Participated in curriculum development activities",
    ],
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: <FaFlask size={32} />,
    title: "Science Subjects Teacher",
    company: "Brookfield Ideal Science School",
    duration: "2016 to 2018",
    location: "Gujranwala, Pakistan",
    description:
      "Started teaching career focusing on multiple science subjects, building foundational teaching skills and student engagement techniques.",
    tasks: [
      "Taught chemistry, physics, and biology to secondary students",
      "Managed science laboratory activities and safety protocols",
      "Developed interactive teaching methods for complex concepts",
      "Organized science fairs and student competitions",
    ],
    gradient: "from-gray-600 to-gray-800",
  },
  {
    icon: <FaBookOpen size={32} />,
    title: "Research & Academic Pursuits",
    company: "Ongoing Academic Development",
    duration: "2016 to Present",
    location: "Pakistan",
    description:
      "Continuous involvement in research activities, publications, and academic conferences while pursuing advanced degrees in chemistry.",
    tasks: [
      "Conducting research on curcumin and metal-organic frameworks",
      "Publishing research papers in international journals",
      "Participating in academic conferences (TRIC 2023 & 2024)",
      "Pursuing PhD in Chemistry with focus on innovative research",
    ],
    gradient: "from-black to-gray-700",
  },
];

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality - every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 text-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full mb-6 shadow-lg">
            <FaChalkboardTeacher className="text-white text-2xl sm:text-3xl" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Teaching & Research Experience
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Professional journey in chemistry education and academic research
            spanning various institutions and roles.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Navigation Arrows - Only show on large screens */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="hidden lg:flex absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="hidden lg:flex absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Slider Content */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
            {/* Current Experience Display */}
            <div className="p-6 sm:p-8 lg:p-12 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 h-full">
                {/* Left Side - Icon and Basic Info */}
                <div className="flex-shrink-0 text-center lg:text-left w-full lg:w-auto">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${experiences[currentSlide].gradient} rounded-full flex items-center justify-center text-white mx-auto lg:mx-0 mb-4 sm:mb-6 shadow-lg transform transition-transform duration-500`}
                  >
                    {experiences[currentSlide].icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
                    {experiences[currentSlide].title}
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                    {experiences[currentSlide].company}
                  </p>

                  {/* Duration and Location with Icons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mb-4 lg:mb-0">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-500" />
                      <span className="font-medium">
                        {experiences[currentSlide].duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <span className="font-medium">
                        {experiences[currentSlide].location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Description and Tasks */}
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    {experiences[currentSlide].description}
                  </p>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-black mb-4 flex items-center">
                      <FaStar className="mr-2 text-gray-600" />
                      Key Responsibilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {experiences[currentSlide].tasks.map(
                        (task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {task}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-200">
              <div
                className="h-full bg-black transition-all duration-500 ease-out"
                style={{
                  width: `${((currentSlide + 1) / experiences.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Below the card */}
        <div className="flex lg:hidden justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center mt-6 lg:mt-8 space-x-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-black scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              } disabled:cursor-not-allowed`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <span className="text-sm sm:text-base text-gray-600 font-medium">
            {currentSlide + 1} of {experiences.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
