import { motion } from "framer-motion";
import {
  FaTools,
  FaWarehouse,
  FaShieldAlt,
  FaHome,
  FaBorderAll,
  FaIndustry,
  FaWrench,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: FaTools,
    title: "Steel Fabrication",
    description:
      "Custom steel fabrication for residential, commercial, and industrial projects.",
  },
  {
    icon: FaWarehouse,
    title: "Custom Gates",
    description:
      "Sliding, swing, pedestrian, and security gates built to your specifications.",
  },
  {
    icon: FaShieldAlt,
    title: "Burglar Bars",
    description:
      "Secure and stylish burglar bars for homes, offices, and commercial buildings.",
  },
  {
    icon: FaHome,
    title: "Carports",
    description:
      "Durable steel carports designed for long-lasting protection.",
  },
  {
    icon: FaBorderAll,
    title: "Balustrades",
    description:
      "Modern steel balustrades for balconies, staircases, and walkways.",
  },
  {
    icon: FaIndustry,
    title: "Palisade Fencing",
    description:
      "High-quality steel fencing solutions for homes and businesses.",
  },
  {
    icon: FaWrench,
    title: "Welding Repairs",
    description:
      "On-site and workshop welding repairs for damaged steel structures.",
  },
  {
    icon: FaBuilding,
    title: "Structural Steel",
    description:
      "Fabrication and installation of structural steel for construction projects.",
  },
];

const Services = () => { 
  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-gray-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 w-full max-w-3xl text-center sm:mb-16">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-600 sm:text-base sm:tracking-[4px]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Professional Steel Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            From custom steel fabrication to professional installations,
            we provide reliable solutions tailored to residential,
            commercial, and industrial clients.
          </p>

        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex h-full w-full flex-col rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-orange-600 sm:p-7 lg:p-8"
              >

                {/* Icon */}
                <Icon className="mb-5 text-4xl text-orange-600 transition-colors duration-300 group-hover:text-white sm:text-5xl" />

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600 transition-colors duration-300 group-hover:text-orange-100 sm:text-base sm:leading-7">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;