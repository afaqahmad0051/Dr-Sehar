import {
  FaFlask,
  FaMicroscope,
  FaAtom,
  FaLeaf,
  FaChalkboardTeacher,
  FaBookOpen,
  FaSearch,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const Research = () => {
  const researchAreas = [
    {
      name: "Curcumin Research",
      description:
        "Investigating curcumin derivatives and their therapeutic potential for diverse applications in drug discovery.",
      icon: <FaLeaf className="text-gray-700" />,
    },
    {
      name: "Metal-Organic Frameworks",
      description:
        "Exploring MOFs as versatile platforms for curcumin delivery and overcoming bioavailability challenges.",
      icon: <FaAtom className="text-gray-800" />,
    },
    {
      name: "Biodegradable Materials",
      description:
        "Development of sustainable and biodegradable film materials for environmental applications.",
      icon: <FaLeaf className="text-gray-600" />,
    },
    {
      name: "Drug Discovery",
      description:
        "Research into sulfonamides and other molecules for pharmaceutical applications and medical treatments.",
      icon: <FaMicroscope className="text-gray-700" />,
    },
  ];

  const academicServices = [
    {
      name: "Chemistry Education",
      description:
        "Providing high-quality chemistry education at secondary and higher secondary levels with innovative teaching methods.",
      icon: <FaChalkboardTeacher className="text-gray-800" />,
    },
    {
      name: "Research Supervision",
      description:
        "Guiding and mentoring students in chemistry research projects and thesis work.",
      icon: <FaGraduationCap className="text-gray-700" />,
    },
    {
      name: "Laboratory Training",
      description:
        "Conducting practical laboratory sessions and training in modern analytical chemistry techniques.",
      icon: <FaFlask className="text-gray-600" />,
    },
    {
      name: "Academic Writing",
      description:
        "Assistance with research paper writing, publication preparation, and academic documentation.",
      icon: <FaBookOpen className="text-gray-800" />,
    },
    {
      name: "Conference Presentations",
      description:
        "Presenting research findings at international conferences and academic forums.",
      icon: <FaSearch className="text-gray-700" />,
    },
    {
      name: "Curriculum Development",
      description:
        "Developing engaging chemistry curricula and educational materials for effective learning.",
      icon: <FaLaptopCode className="text-gray-600" />,
    },
  ];

  return (
    <>
      {/* Research Areas Section */}
      <section
        id="research"
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 text-black"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black">
              Research Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Current research focus and areas of expertise in chemistry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((research) => (
              <div
                key={research.name}
                className="group p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:border-black hover:shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="text-5xl mb-4 group-hover:text-black">
                  {research.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-black">
                  {research.name}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-800">
                  {research.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Services Section */}
      <section
        id="academic-services"
        className="bg-gradient-to-bl from-gray-100 via-gray-50 to-white py-16 text-black"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black">
              Academic Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Educational services and expertise offered in chemistry and
              research.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicServices.map((service) => (
              <div
                key={service.name}
                className="group p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:border-black hover:shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="text-5xl mb-4 group-hover:text-black">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-black">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-800">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
