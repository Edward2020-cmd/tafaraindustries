import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gate01 from "../../assets/images/gallery/gate01.jpg";

import fence from "../../assets/images/gallery/fence.jpg";
import carpots1 from "../../assets/images/gallery/carpots1.jpg";

import Buric from "../../assets/images/gallery/Buric.jpg";

const categories = [
  "All",
  "Gates",
  "Fencing",
  "Carports",
  "Welding",
  "Balustrades",
];

const galleryItems = [
  {
    id: 1,
    image: gate01,
    category: "Gates",
    title: "Custom Steel Gate",
  },
  {
    id: 2,
    image: fence,
    category: "Fencing",
    title: "Palisade Fence Installation",
  },
  {
    id: 3,
    image: carpots1,
    category: "Carports",
    title: "Steel Carport",
  },
  {
    id: 4,
    image: gate01,
    category: "Welding",
    title: "Steel Fabrication",
  },
  {
    id: 5,
    image: Buric,
    category: "Balustrades",
    title: "Steel Balustrade",
  },

];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="bg-gray-950 py-24"
    >
      <div className="mx-auto  px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto  text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-blue-200">
            Our Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-200 md:text-5xl">
            Craftsmanship in Every Detail
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-200">
            Explore our welding, steel fabrication, gates,
            fencing, carports and installation work.
          </p>
        </motion.div>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-blue-200 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <motion.div
          layout
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-2xl"
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Text */}

                <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-blue-200">
                    {item.title}
                  </h3>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;