import {
  FaRocket,
  FaCode,
  FaRegLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaRocket size={32} />,
    title: "Mid-Level Laravel Developer",
    company: "Robust Agency",
    duration: "Oct 2023 to Present",
    description:
      "Driving backend development, DevOps automation, and API integrations for large-scale applications.",
    tasks: [
      "Integrated OpenAI, Shopify, Amazon and Meta api's.",
      "Developed and optimized monolith architecture.",
      "Implemented CI/CD pipelines and automated deployments.",
      "Managed server infrastructure and cloud-based hosting.",
    ],
    gradient: "from-gray-800 to-gray-600",
  },
  {
    icon: <FaCode size={32} />,
    title: "Laravel Developer",
    company: "Consecutive Bytes",
    duration: "Apr 2023 to Sep 2023",
    description:
      "Worked as a full-stack developer, implementing APIs and interactive front-end components.",
    tasks: [
      "Integrated Sportmonks and Football API for live data.",
      "Developed dynamic front-end dashboards using blade.",
      "Built and maintained RESTful APIs with Laravel.",
      "Ensured cross-platform compatibility and performance.",
    ],
    gradient: "from-gray-700 to-gray-500",
  },
  {
    icon: <FaRegLightbulb size={32} />,
    title: "Junior Software Developer",
    company: "Royal Soft",
    duration: "Mar 2022 to Apr 2023",
    description:
      "Worked as a full-stack developer, implementing and optimizing accounting software solutions.",
    tasks: [
      "Developed accounting software modules with Laravel.",
      "Built UI components with Html, Css and Bootstrap for financial dashboards.",
      "Integrated accounting APIs for automation.",
      "Optimized database queries to improve processing speed.",
    ],
    gradient: "from-gray-600 to-gray-400",
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: "Intern Developer",
    company: "6Flicks Technologies",
    duration: "Aug 2019 to Feb 2022",
    description:
      "Learned full-stack development basics and contributed to real-world applications.",
    tasks: [
      "Learned fundamentals of frontend and backend development.",
      "Gained experience with WordPress development.",
      "Built small-scale CRUD applications for internal use.",
      "Developed accounting and school management software.",
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
        {/* Left Section - Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">Experience</h2>
          <p className="mt-2 text-lg text-gray-600">
            Take a look at the milestones in my professional journey.
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
                  {experience.company} - {experience.duration}
                </p>
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
