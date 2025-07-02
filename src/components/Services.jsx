import {
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaShopify,
  FaServer,
  FaLinux,
  FaCogs,
  FaTachometerAlt,
} from "react-icons/fa";

const Services = () => {
  const servicesPart1 = [
    {
      name: "Web Development",
      description:
        "Creating responsive, dynamic, and SEO-friendly websites tailored to your needs.",
      icon: <FaLaptopCode className="text-gray-700" />,
    },
    {
      name: "AI Integration",
      description:
        "Implementing AI-powered solutions such as chatbots, automation, and recommendation systems.",
      icon: <FaRobot className="text-gray-800" />,
    },
    {
      name: "Database Management",
      description:
        "Ensuring efficient storage and retrieval of your data with secure database solutions.",
      icon: <FaDatabase className="text-gray-600" />,
    },
    {
      name: "Cloud Integration",
      description:
        "Deploying cloud-based solutions for scalability, reliability, and performance.",
      icon: <FaCloud className="text-gray-700" />,
    },
  ];

  const servicesPart2 = [
    {
      name: "Shopify Development",
      description:
        "Building customized Shopify stores with seamless payment integrations and scalable features.",
      icon: <FaShopify className="text-gray-800" />,
    },
    {
      name: "DevOps & Automation",
      description:
        "Streamlining deployment, monitoring, and CI/CD pipelines for optimized workflows.",
      icon: <FaServer className="text-gray-700" />,
    },
    {
      name: "Linux & Ubuntu Management",
      description:
        "Setting up and maintaining secure, high-performance Ubuntu-based server environments.",
      icon: <FaLinux className="text-gray-600" />,
    },
    {
      name: "AI & OpenAI Integration",
      description:
        "Integrating AI-powered solutions using OpenAI for automation, chatbots, and data analysis.",
      icon: <FaRobot className="text-gray-800" />,
    },
    {
      name: "Laravel API & Backend Development",
      description:
        "Creating RESTful APIs, optimizing databases, and ensuring backend scalability using Laravel.",
      icon: <FaCogs className="text-gray-700" />,
    },
    {
      name: "Backend Performance & Caching",
      description:
        "Improving system performance using caching techniques, load balancing, and query optimization.",
      icon: <FaTachometerAlt className="text-gray-600" />,
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <section
        id="services"
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 text-black"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black">My Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Transforming ideas into impactful digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesPart1.map((service) => (
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

      {/* Section 2 */}
      <section
        id="services-part2"
        className="bg-gradient-to-bl from-gray-100 via-gray-50 to-white py-16 text-black"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black">
              More Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Delivering a diverse range of services to meet your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPart2.map((service) => (
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

export default Services;
