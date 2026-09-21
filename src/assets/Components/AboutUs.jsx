
import aboutImage from "../../../src/assets/images/about.jpg";

import {
    FaCheckCircle,
    FaShieldAlt,
    FaTools,
    FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900  py-24"
    >
     <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
            <div 
            initial={{ opacity: 0, x: -88}}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true}}
            transition= {{ duration: 0.8}}
            >
                <img
                src={aboutImage}
                alt="Steel Fabrication"
                className="rounded-2xl shadow-2xl"
                />
            </div>
            <div>
            
     <p className="font-semibold uppercase tracking-[4px] text-blue-200">
              About Tafara Industries
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-blue-200 md:text-5xl">
              Building Strong Steel
              <span className="block text-blues-200">
                Solutions That Last
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Tafara Industries is a trusted steel fabrication and welding
              company delivering custom gates, burglar bars, balustrades,
              carports, palisade fencing, and structural steel solutions for
              residential, commercial, and industrial clients.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                    <FaTools className="mt-1 text-3xl text-blue-200" />
                    <div>
                        <h3 className="font-semibold text-gray-900">
                    Skilled Fabricators
                  </h3>

                  <p className="text-gray-600">
                    Experienced professionals delivering quality workmanship.
                  </p>
                    </div>
                </div>
                 <div className="flex gap-4">
                <FaShieldAlt className="mt-1 text-3xl text-blue-200" />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Quality Materials
                  </h3>

                  <p className="text-gray-600">
                    We use durable steel built to last.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaUsers className="mt-1 text-3xl text-blue-200" />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Customer Focused
                  </h3>

                  <p className="text-gray-600">
                    Every project is tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="mt-1 text-3xl text-blue-200" />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Reliable Service
                  </h3>

                  <p className="text-gray-600">
                    On-time delivery and professional installation.
                  </p>
                </div>
              </div>

            </div>

            <a
              href="#services"
              className="mt-10 inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Our Services
            </a>

            
            </div>
        </div>
     </div>
    </section>
  );
};

export default About;