import {
  FaGraduationCap,
  FaUniversity,
  FaMedal,
  FaFlask,
  FaBookOpen,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "PhD Chemistry",
      institution: "University of Education",
      period: "2024 - Present",
      location: "Lahore, Pakistan",
      icon: <FaGraduationCap className="text-gray-800" />,
    },
    {
      degree: "MPhil Chemistry",
      institution: "University of Education",
      period: "2022 - 2024",
      location: "Lahore, Pakistan",
      grade: "3.94/4.0",
      icon: <FaUniversity className="text-gray-700" />,
    },
    {
      degree: "Master of Science",
      institution: "University of Punjab",
      period: "2018 - 2021",
      location: "Lahore, Pakistan",
      grade: "933/1200",
      field: "Chemistry",
      icon: <FaFlask className="text-gray-600" />,
    },
    {
      degree: "Bachelor of Education",
      institution: "Allama Iqbal Open University",
      period: "2021 - 2023",
      grade: "1345/1800",
      specialization: "Teacher Training",
      icon: <FaBookOpen className="text-gray-800" />,
    },
    {
      degree: "Bachelor of Science",
      institution: "University of Punjab",
      period: "2016 - 2018",
      location: "Lahore, Pakistan",
      grade: "625/800",
      field: "Chemistry",
      icon: <FaUniversity className="text-gray-700" />,
    },
    {
      degree: "Academic Excellence",
      institution: "Multiple Awards",
      period: "2018 - 2023",
      description: "Scholarships & Recognition",
      icon: <FaMedal className="text-black" />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 text-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">
            Education & Training
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Academic journey and qualifications in chemistry and education.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-50 hover:border-black hover:shadow-lg"
            >
              <div className="text-5xl group-hover:text-black mb-4">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-2">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-600 mb-2">{edu.period}</p>
              {edu.location && (
                <p className="text-sm text-gray-600 mb-2">{edu.location}</p>
              )}
              {edu.grade && (
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Grade: {edu.grade}
                </p>
              )}
              {edu.field && (
                <p className="text-sm text-gray-600 mb-2">Field: {edu.field}</p>
              )}
              {edu.specialization && (
                <p className="text-sm text-gray-600 mb-2">
                  Specialization: {edu.specialization}
                </p>
              )}
              {edu.description && (
                <p className="text-sm text-gray-600">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
