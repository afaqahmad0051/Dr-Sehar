import { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaMedal,
  FaFlask,
  FaBookOpen,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaStar,
  FaCertificate,
  FaAward,
  FaLightbulb,
} from "react-icons/fa";

// Counter Animation Component
const AnimatedCounter = ({ endValue, duration = 2000, isVisible }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      const startValue = 0;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(
          startValue + (endValue - startValue) * easeOutQuart
        );

        setCurrentValue(current);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    } else if (!isVisible) {
      // Reset animation state when element goes out of view
      setCurrentValue(0);
      setHasAnimated(false);
    }
  }, [isVisible, endValue, duration, hasAnimated]);

  return currentValue;
};

const Education = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [animatingNumbers, setAnimatingNumbers] = useState(false);
  const observerRef = useRef(null);
  const statsRef = useRef(null);

  const educationData = [
    {
      degree: "PhD Chemistry",
      institution: "University of Education",
      period: "2024 - Present",
      location: "Lahore, Pakistan",
      status: "In Progress",
      icon: <FaGraduationCap className="text-white" />,
      gradient: "from-gray-800 to-black",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-black",
      accentColor: "text-gray-700",
      description:
        "Advanced research in computational chemistry and materials science",
      highlights: [
        "Focus on curcumin derivatives and therapeutic applications",
        "Metal-organic frameworks for drug delivery systems",
        "Computational modeling and molecular dynamics",
        "Sustainable chemistry and green synthesis methods",
      ],
      achievements: "Research Publications in International Journals",
      researchArea: "Computational Chemistry & Drug Discovery",
      field: "Chemistry",
    },
    {
      degree: "MPhil Chemistry",
      institution: "University of Education",
      period: "2022 - 2024",
      location: "Lahore, Pakistan",
      grade: "3.94/4.0",
      status: "Completed",
      icon: <FaUniversity className="text-white" />,
      gradient: "from-gray-700 to-gray-900",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-gray-600",
      accentColor: "text-gray-600",
      description:
        "Specialized research in organic chemistry and drug discovery",
      highlights: [
        "Advanced organic synthesis and characterization",
        "Drug discovery and medicinal chemistry research",
        "Spectroscopic analysis and structure determination",
        "Research methodology and academic writing",
      ],
      achievements: "Graduated with Distinction - Top 5% of Class",
      researchArea: "Organic Chemistry & Medicinal Chemistry",
      field: "Chemistry",
    },
    {
      degree: "Master of Science",
      institution: "University of Punjab",
      period: "2018 - 2021",
      location: "Lahore, Pakistan",
      grade: "933/1200",
      field: "Chemistry",
      status: "Completed",
      icon: <FaFlask className="text-white" />,
      gradient: "from-gray-600 to-gray-800",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-gray-500",
      accentColor: "text-gray-600",
      description: "Comprehensive study in analytical and physical chemistry",
      highlights: [
        "Advanced analytical instrumentation and techniques",
        "Physical chemistry principles and thermodynamics",
        "Inorganic chemistry and coordination compounds",
        "Laboratory management and safety protocols",
      ],
      achievements: "Merit Scholarship Recipient",
      researchArea: "Analytical & Physical Chemistry",
    },
    {
      degree: "Bachelor of Education",
      institution: "Allama Iqbal Open University",
      period: "2021 - 2023",
      grade: "1345/1800",
      specialization: "Teacher Training",
      status: "Completed",
      icon: <FaBookOpen className="text-white" />,
      gradient: "from-gray-500 to-gray-700",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-gray-500",
      accentColor: "text-gray-600",
      description: "Educational methodology and pedagogical training",
      highlights: [
        "Modern teaching methodologies and techniques",
        "Educational psychology and student assessment",
        "Curriculum development and lesson planning",
        "Classroom management and educational technology",
      ],
      achievements: "Certified Professional Educator",
      researchArea: "Educational Sciences & Pedagogy",
      field: "Education",
    },
    {
      degree: "Bachelor of Science",
      institution: "University of Punjab",
      period: "2016 - 2018",
      location: "Lahore, Pakistan",
      grade: "625/800",
      field: "Chemistry",
      status: "Completed",
      icon: <FaUniversity className="text-white" />,
      gradient: "from-gray-600 to-gray-800",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-gray-600",
      accentColor: "text-gray-600",
      description:
        "Foundation in chemistry principles and laboratory techniques",
      highlights: [
        "Core chemistry fundamentals and principles",
        "Extensive laboratory experience and techniques",
        "Mathematical chemistry and computational methods",
        "Scientific research methodology and documentation",
      ],
      achievements: "Dean's List - Academic Excellence",
      researchArea: "General Chemistry & Laboratory Sciences",
    },
    {
      degree: "Academic Excellence",
      institution: "Multiple Awards",
      period: "2018 - 2023",
      status: "Ongoing Recognition",
      description: "Scholarships, merit awards, and academic recognition",
      icon: <FaMedal className="text-white" />,
      gradient: "from-black to-gray-700",
      borderColor: "border-gray-300",
      hoverBorderColor: "hover:border-black",
      accentColor: "text-gray-700",
      highlights: [
        "Merit-based scholarships and financial aid",
        "Academic excellence awards and recognitions",
        "Research competition awards and certificates",
        "Leadership and community service recognition",
      ],
      achievements: "Multiple Academic Honors & Scholarships",
      researchArea: "Academic Leadership & Excellence",
      field: "Chemistry",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          } else {
            // Remove from visible cards when scrolling away
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "50px",
      }
    );

    // Stats animation observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatingNumbers(true);
          } else {
            setAnimatingNumbers(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const cards = document.querySelectorAll(".education-card");
    cards.forEach((card) => {
      observerRef.current.observe(card);
    });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="education"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 text-black overflow-hidden"
    >
      {/* Background decoration - black and white theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-black rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gray-700 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gray-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6 shadow-lg">
            <FaGraduationCap className="text-white text-3xl" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-4">
            Education & Training
          </h2>
          <div className="w-32 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive academic journey spanning chemistry research,
            educational methodology, and continuous professional development in
            the field of chemical sciences.
          </p>
        </div>

        {/* Enhanced Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-index={index}
              className={`education-card group relative bg-white border-2 ${
                edu.borderColor
              } ${
                edu.hoverBorderColor
              } rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 ease-out ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-95"
              } hover:shadow-2xl`}
              style={{
                transitionDelay: visibleCards.has(index)
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              {/* Enhanced Gradient Header */}
              <div
                className={`relative bg-gradient-to-r ${edu.gradient} p-6 text-white overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
                <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-white opacity-5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
                        edu.status === "In Progress"
                          ? "bg-gray-200 text-gray-800"
                          : edu.status === "Ongoing Recognition"
                          ? "bg-gray-300 text-gray-900"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm opacity-90 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Enhanced Card Content */}
              <div className="p-6 space-y-5">
                {/* Period and Location */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className={`${edu.accentColor}`} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className={`${edu.accentColor}`} />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  )}
                </div>

                {/* Research Area */}
                {edu.researchArea && (
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                    {edu.researchArea}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="space-y-2">
                    <h4
                      className={`text-sm font-semibold ${edu.accentColor} flex items-center`}
                    >
                      <FaLightbulb className="mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 flex items-start"
                        >
                          <FaStar
                            className={`${edu.accentColor} mr-2 mt-0.5 text-xs flex-shrink-0`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div
                      className={`flex items-center text-sm font-semibold ${edu.accentColor} mb-1`}
                    >
                      <FaAward className="mr-2" />
                      Achievement
                    </div>
                    <p className="text-xs text-gray-700 font-medium">
                      {edu.achievements}
                    </p>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-2">
                  {edu.grade && (
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border-l-4 border-yellow-400">
                      <span className="text-sm font-medium text-gray-700">
                        Grade:
                      </span>
                      <span className="text-sm font-bold text-gray-900 flex items-center">
                        <FaTrophy className="text-yellow-500 mr-1" />
                        {edu.grade}
                      </span>
                    </div>
                  )}
                  {edu.field && (
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border-l-4 border-gray-300">
                      <span className="text-sm font-medium text-gray-700">
                        Field:
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {edu.field}
                      </span>
                    </div>
                  )}
                  {edu.specialization && (
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border-l-4 border-gray-300">
                      <span className="text-sm font-medium text-gray-700">
                        Specialization:
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {edu.specialization}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Card Animation Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section with Counter Animations */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              number: 6,
              label: "Degrees & Certifications",
              icon: FaGraduationCap,
            },
            { number: 8, label: "Years of Study", icon: FaCalendarAlt },
            { number: 3, label: "Universities", icon: FaUniversity },
            { number: 15, label: "Academic Awards", icon: FaCertificate },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                animatingNumbers
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-4 opacity-70 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform ${
                  animatingNumbers ? "rotate-0 scale-100" : "rotate-12 scale-90"
                } transition-all duration-700`}
              >
                <stat.icon className="text-white text-xl" />
              </div>
              <div
                className={`text-4xl font-bold text-black mb-2 transform ${
                  animatingNumbers ? "scale-100" : "scale-90"
                } transition-all duration-700`}
              >
                <AnimatedCounter
                  endValue={stat.number}
                  duration={2000 + index * 200}
                  isVisible={animatingNumbers}
                />
                +
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
