// Research Publications data
const publications = [
  {
    title:
      "Structural Development of Curcumin: A Natural Product Arsenal for Diverse Therapeutic Targets",
    description:
      "Comprehensive research on curcumin derivatives and their therapeutic potential. This study explores the structural modifications of curcumin and their enhanced bioavailability and stability for various therapeutic applications.",
    image: "/images/curcumin-research.jpg",
    journal: "Journal of Molecular Structure",
    authors: ["Sehar Basheer", "Dr. Mahmood Ahmad"],
    year: "2025",
    volume: "Volume 1324",
    url: "#",
  },
  {
    title: "Sulfonamides as a Promising Scaffold in Drug Discovery",
    description:
      "An insightful review on FDA-approved sulfonamide molecules covering synthesis strategies, medical applications, and binding mechanisms. The research highlights the role of sulfonamides in modern pharmaceutical development.",
    image: "/images/sulfonamides-research.jpg",
    journal: "Chemistry and Biodiversity",
    authors: ["Sehar Basheer", "Dr. Mahmood Ahmad"],
    year: "2025",
    volume: "In Press",
    url: "#",
  },
  {
    title: "Development of Biodegradable Film Based on Guar Gum-Gelatin",
    description:
      "Research focused on developing sustainable and biodegradable film materials using guar gum, gelatin, and sodium alginate. This work addresses environmental concerns through innovative biomaterial solutions.",
    image: "/images/biodegradable-film.jpg",
    journal: "Royal Society of Chemistry",
    authors: ["Sehar Basheer", "Dr. Mahmood Ahmad"],
    year: "2025",
    volume: "DOI: 10.1039/D4RA03985H",
    url: "#",
  },
  {
    title: "Metal-Organic Frameworks for Curcumin Delivery",
    description:
      "Exploring MOFs as versatile platforms for curcumin delivery systems. This research addresses bioavailability challenges through advanced nanotechnology and drug delivery mechanisms.",
    image: "/images/mof-research.jpg",
    journal: "Coordination Chemistry Reviews",
    authors: ["Sehar Basheer", "Dr. Mahmood Ahmad"],
    year: "2025",
    volume: "Submitted",
    url: "#",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="py-16 bg-gradient-to-r from-white via-gray-50 to-gray-100 text-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black">
            Research Publications
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Published research papers and contributions to the field of
            chemistry.
          </p>
        </div>

        <div className="space-y-16">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 md:px-8 transition-transform`}
            >
              {/* Publication Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-2xl relative group border border-gray-200">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl text-gray-400 mb-4">📄</div>
                    <p className="text-gray-600 font-medium">
                      Research Publication
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {publication.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Publication Details */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold text-black mb-4 hover:text-gray-700 transition-colors duration-300">
                  {publication.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {publication.description}
                </p>

                {/* Publication Info */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Journal:</span>{" "}
                    {publication.journal}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Authors:</span>{" "}
                    {publication.authors.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Year:</span>{" "}
                    {publication.year}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Volume/DOI:</span>{" "}
                    {publication.volume}
                  </p>
                </div>

                {/* Research Areas */}
                <div className="flex flex-wrap gap-3">
                  {index === 0 && (
                    <>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Curcumin
                      </span>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Drug Discovery
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Sulfonamides
                      </span>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Pharmaceutical
                      </span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Biomaterials
                      </span>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Sustainability
                      </span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        MOFs
                      </span>
                      <span className="bg-black text-white py-1 px-4 rounded-full text-sm shadow-md transition-colors duration-300 hover:bg-gray-800">
                        Drug Delivery
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
