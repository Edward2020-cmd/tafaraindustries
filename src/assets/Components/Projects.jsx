import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import { FaArrowRight} from "react-icons/fa";

import gate1 from "../../assets/images/projects/gate1.jpg";
import gate2 from "../../assets/images/projects/gate2.jpg";
import weilding from "../../assets/images/projects/weilding.jpg";
import carports from "../../assets/images/projects/carports.jpg";
import balustrades from "../../assets/images/projects/balustrades.jpg";
import wellding from "../../assets/images/projects/wellding.jpg";


const categories = [
    "All",
    "Gates",
    "Fencing",
    "Carports",
    "Balustrades",
    "Security",
];


const projects = [
  {
    title: "Modern Sliding Gate",
    category: "Gates",
    image: gate1,
    description:
      "Custom steel sliding gate designed and installed for a residential property.",
  },
  {
    title: "Custom Steel Gate",
    category: "Gates",
    image: gate2,
    description:
      "Modern custom fabricated steel gate with a durable finish.",
  },
  {
    title: "Palisade Security Fence",
    category: "Fencing",
    image: weilding,
    description:
      "Professional palisade fencing installation for enhanced property security.",
  },
  {
    title: "Steel Carport",
    category: "Carports",
    image: carports,
    description:
      "Strong and practical steel carport designed for long-term protection.",
  },
  {
    title: "Modern Balustrade",
    category: "Balustrades",
    image: balustrades,
    description:
      "Custom steel balustrade installation for a modern residential property.",
  },
  {
    title: "Security Burglar Bars",
    category: "Security",
    image: wellding,
    description:
      "Custom security bars designed to provide protection without compromising style.",
  },
];

const Projects = () =>  {

    const [activeCategory, setActiveCategory] = useState("All")
 

    const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="my-10 bg-gray-950 py-24 gap-10 ">
      <div className="mx-auto items-center justify-center">
        {/* Heading */}
        <div className="text-center">
          <p className="mt-8 text-center text-blue-200 md:text-5xl font-semibold font-bold uppercase">
            Our Projects
          </p>

          <h2 className="mt-14 text-4xl font-bold text-blue-200 md:text-2xl">
            Built With Precision
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our steel fabrication, gate installation,
            fencing, and custom steel projects.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 px-5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-3xl px-5 py-2.5 text-sm font-semibold transition px-6 ${
                activeCategory === category
                  ? "bg-blue-200 text-white"
                  : "bg-gray-800 text-blue-200 hover:bg-blue-600 hover:text-blue-300 mb-10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div
          layout
          className="mt-12 grid gap-9 p-4 px-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full bg-blue-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-400">
                    {project.category}
                  </span>

                  {/* Hover button */}
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded bg-blue-200 text-gray-400 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaArrowRight />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-200">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects