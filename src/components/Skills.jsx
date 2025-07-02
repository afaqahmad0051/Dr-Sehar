import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiJquery,
  SiOracle,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-gray-800" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-gray-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-gray-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-gray-800" /> },
    { name: "JavaScript", icon: <FaJs className="text-gray-700" /> },
    { name: "jQuery", icon: <SiJquery className="text-gray-600" /> },
    { name: "PHP", icon: <FaPhp className="text-gray-800" /> },
    { name: "Laravel", icon: <SiLaravel className="text-gray-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-gray-600" /> },
    { name: "Github", icon: <FaGithub className="text-black" /> },
    { name: "Oracle", icon: <SiOracle className="text-gray-800" /> },
    { name: "React", icon: <FaReact className="text-gray-700" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 text-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">My Skills</h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of technologies and tools I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-50 hover:border-black hover:shadow-lg"
            >
              <div className="text-5xl group-hover:text-black">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-black">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
