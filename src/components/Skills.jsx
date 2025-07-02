import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiJquery,
  SiOracle,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Github", icon: <FaGithub className="text-gray-300" /> },
    { name: "Oracle", icon: <SiOracle className="text-green-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-400">My Skills</h2>
          <p className="mt-4 text-lg text-gray-300">
            A showcase of technologies and tools I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-900 hover:shadow-blue-500/50"
            >
              <div className="text-5xl">{skill.icon}</div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-white">
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