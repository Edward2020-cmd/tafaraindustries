import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../../assets/images/heroImage.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-8 flex min-h-[90vh] w-full items-center overflow-hidden sm:min-h-screen"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Steel fabrication and welding"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="w-full max-w-4xl">

          {/* Label */}
          <span className="mb-5 inline-block rounded-full border border-blue-200 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-gray-200 sm:text-sm sm:tracking-wider">
            Professional Welding & Steel Fabrication
          </span>

          {/* Heading */}
          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building South Africa's
            <span className="mt-2 block text-blue-200">
              Strongest Steel Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:mb-10 sm:text-lg sm:leading-8">
            We specialise in custom steel gates, burglar bars, carports,
            palisade fencing, structural steel fabrication, and professional
            welding services for residential, commercial, and industrial
            clients.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-400 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 sm:w-auto sm:px-10"
            >
              Get a Free Quote
              <FaArrowRight />
            </a>

            <a
              href="tel:+27000000000"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900 sm:w-auto sm:px-10"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-gray-700 pt-8 sm:mt-14 sm:gap-8 sm:pt-10 md:grid-cols-4">

            {/* Stat 1 */}
            <div>
              <h2 className="text-2xl font-bold text-blue-200 sm:text-3xl">
                500+
              </h2>
              <p className="mt-1 text-sm text-gray-300 sm:mt-2 sm:text-base">
                Projects Completed
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h2 className="text-2xl font-bold text-blue-200 sm:text-3xl">
                10+
              </h2>
              <p className="mt-1 text-sm text-gray-300 sm:mt-2 sm:text-base">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h2 className="text-2xl font-bold text-blue-200 sm:text-3xl">
                100%
              </h2>
              <p className="mt-1 text-sm text-gray-300 sm:mt-2 sm:text-base">
                Customer Satisfaction
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <h2 className="text-2xl font-bold text-blue-200 sm:text-3xl">
                24/7
              </h2>
              <p className="mt-1 text-sm text-gray-300 sm:mt-2 sm:text-base">
                Support
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;