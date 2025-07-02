// Sample project data
const projects = [
  {
    title: "Social442",
    description:
      "A leading football social network offering live scores, fixtures, fan communities, and fantasy football. Contributed to feature development, performance optimization, and enhancing user engagement.",
    image: "/images/social442.png",
    technologies: ["Laravel", "Php", "jQuery"],
    url: "https://www.social442.com",
  },
  {
    title: "Cosmo City",
    description:
      "An e-commerce platform offering a wide range of beauty products, including skincare, makeup, and personal care. Focused on seamless user experience, secure transactions, and personalized recommendations to enhance customer satisfaction.",
    image: "/images/cosmo-city.png",
    technologies: ["Php", "jQuery", "Bootstrap"],
    url: "https://cosmocity.pk",
  },
  {
    title: "Hangout UAE",
    description:
      "A platform offering customized tours and adventures in Dubai and the UAE, including desert safaris, theme park tickets, and guided city tours. I contributed to optimizing user experience and streamlining booking processes for a range of travel activities.",
    image: "/images/hangout.png",
    technologies: ["Php", "jQuery", "Bootstrap"],
    url: "https://hangoutuae.com",
  },
  {
    title: "Silent Stream",
    description:
      "A cloud file storage service for seamless access, sharing, and synchronization across devices. Offers secure storage with encryption and collaboration tools. Ideal for both personal and business file management.",
    image: "/images/silent-stream.jpg",
    technologies: ["Php", "Laravel", "REST API"],
    url: "http://silentstream.io",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-r from-white via-gray-50 to-gray-100 text-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            A collection of web and mobile applications I&apos;ve built to solve
            real-world problems.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 md:px-8 transition-transform`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-2xl relative group border border-gray-200">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold text-black mb-4 hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
