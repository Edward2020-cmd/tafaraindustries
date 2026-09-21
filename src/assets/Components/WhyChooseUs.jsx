import {
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

import { motion } from "framer-motion";

import whychooseus from "../../assets/images/whychooseus.jpg";

const reasons = [
  {
    icon: FaTools,
    title: "Skilled Craftsmanship",
    description:
      "Our work combines practical experience, precision, and attention to detail.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Materials",
    description:
      "We use durable steel materials designed to provide strength and long-term performance.",
  },
  {
    icon: FaClock,
    title: "Reliable Service",
    description:
      "We aim to keep projects organised and deliver professional installation on schedule.",
  },
  {
    icon: FaDollarSign,
    title: "Competitive Pricing",
    description:
      "We provide practical steel solutions that balance quality, durability, and affordability.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full overflow-hidden bg-gray-900 py-16 sm:py-20 lg:py-24 mb-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-1">

        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-1 w-full lg:order-2"
          >
            {/* Small Heading */}
            <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-200 sm:text-base sm:tracking-[4px]">
              Why Choose Us
            </p>

            {/* Main Heading */}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-blue-200 sm:text-4xl md:text-5xl">
              Built on Quality.
              <span className="block text-blue-200">
                Driven by Craftsmanship.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              At Tafara Industries, we believe that every steel project
              deserves careful planning, quality workmanship, and dependable
              service. From custom gates to structural steel, we focus on
              delivering solutions built to last.
            </p>

            {/* Reasons */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-7">

              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="w-full"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-200/10 sm:h-12 sm:w-12">
                        <Icon className="text-lg text-blue-200 sm:text-xl" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-white sm:text-lg">
                          {reason.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-400">
                          {reason.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 sm:mt-10 sm:inline-flex sm:w-auto"
            >
              <FaCheckCircle />
              Request a Free Quote
            </a>

          </motion.div>

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-2 w-full lg:order-1"
          >
            <div className="relative w-full">

              <img
                src={whychooseus}
                alt="Tafara Industries steel fabrication"
                className="h-[300px] w-full rounded-2xl object-cover shadow-2xl sm:h-[400px] lg:h-[500px]"
              />

              {/* Orange decoration */}
              <div className="absolute bottom-[-10px] right-[-10px] hidden h-24 w-24 rounded-xl bg-orange-600 sm:h-28 sm:w-28 lg:block lg:h-32 lg:w-32" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;