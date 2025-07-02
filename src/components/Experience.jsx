import {
  FaChalkboardTeacher,
  FaFlask,
  FaUserGraduate,
  FaBookOpen,
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
    gradient: "from-gray-800 to-gray-600",
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
    gradient: "from-gray-700 to-gray-500",
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
    gradient: "from-gray-600 to-gray-400",
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
    gradient: "from-black to-gray-800",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white py-12 text-black px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">
            Teaching & Research Experience
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Professional journey in chemistry education and academic research.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between"
            >
              <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${experience.gradient} rounded-full flex items-center justify-center text-white mx-auto lg:mx-0 mb-4`}
                >
                  {experience.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-600">{experience.duration}</p>
                <p className="text-sm text-gray-600">{experience.location}</p>
              </div>

              <div className="w-full lg:w-2/3">
                <p className="text-gray-700">{experience.description}</p>
                <ul className="mt-4 text-gray-600 list-disc pl-5">
                  {experience.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
