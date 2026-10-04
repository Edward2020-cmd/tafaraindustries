import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,

} from "react-icons/fa";
import tafaralogo from "../../assets/images/logo/tafaralogo.png";


const Footer = () => {
  return (
  <footer className="bg-gray-900 text-gray-300">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className= "grid grid-cols-1 md:grid-cols-3 py-16 justify-between gap-10">
            {/* Company */}
         <div>
            <img src={tafaralogo} alt="tafara industries logo" className="h-12 w-12"/>

            <p className="text-blue-200 leading-5 mb-6 p-4 px-4">
                Tafara Industries provides quality steel fabrication,
              custom gates, burglar bars, carports, balustrades and
              professional welding solutions for residential and
              commercial clients.
            </p>
            {/* Social Media*/}
            <div className="flex gap-3">
                <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-blue-400
                hover:text-black transition duration-300"
                >
                    <FaFacebookF/>
                </a>
                 <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-blue-400
                hover:text-black transition duration-300"
                >
                    <FaInstagram/>
                </a>
                 <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-blue-400
                hover:text-black transition duration-300"
                >
                    <FaWhatsapp/>
                </a>

            </div>
            </div>  
            {/* Quick Links*/} 
            <div>
                <h3 className="text-lg font-semibold text-blue-200 mb-5">Quick Links</h3>

                <ul className="space-y-3">
                    <li>
                        <a
                        href="#home"
                        className="hover:text-blue-400 transition text-blue-200"
                        >
                            Home
                        </a>
                        </li>
                          <li>
                        <a
                        href="#about"
                        className="hover:text-blue-400 transition text-blue-200"
                        >
                            About Us
                        </a>
                        </li>
                          <li>
                        <a
                        href="#services"
                        className="hover:text-blue-400 transition text-blue-200"
                        >
                            Services
                        </a>
                        </li>
                          <li>
                        <a
                        href="#gallery"
                        className="hover:text-blue-400 transition text-blue-200"
                        >
                            Gallery
                        </a>
                        </li>
                          <li>
                        <a
                        href="#contact"
                        className="hover:text-blue-400 transition text-blue-200"
                        >
                            Contact
                        </a>
                        </li>
                </ul>
            </div>
                    {/*Services */}
                    {/* <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                                          <li>Steel Fabrication</li>
              <li>Custom Gates</li>
              <li>Burglar Bars</li>
              <li>Carports</li>
              <li>Balustrades</li>
              <li>Welding Services</li>

                        </ul>
                    </div> */}
                    {/*Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">Contact Us</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-blue-400 mt-1"/>
                                <div>
                                    <p className="text-blue-200 font-medium">Phone</p>
                                    <a
                                    href="tel:+2700000000"
                                    className="text-gray-400 hover:text-blue-400">

                                    </a>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-400 mt-1" />

                <div>
                  <p className="text-blue-200 font-medium">Email</p>
                  <a
                    href="mailto:info@tafaraindustries.co.za"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    info@tafaraindustries.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />

                <div>
                  <p className="text-blue-200 font-medium">Location</p>
                  <p className="text-gray-400">
                    Johannesburg, Gauteng
                  </p>
                </div>
              </div>

                        </div>
                    </div>
        </div>
    </div>
    {/* CTA */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8
          flex flex-col md:flex-row items-center
          justify-between gap-5">

          <div>
            <h3 className="text-xl font-semibold text-blue-200">
              Need a Steelwork Solution?
            </h3>

            <p className="text-gray-400 mt-1">
              Contact Tafara Industries for a free quotation.
            </p>
          </div>

          <a
            href="https://wa.me/27000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3
            bg-blue-400 text-white
            px-6 py-3 rounded-lg
            font-semibold
            hover:bg-yellow-400
            transition duration-300"
          >
            <FaWhatsapp size={20} />
            Get a Quote
          </a>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5
          flex flex-col md:flex-row
          justify-between items-center
          gap-3 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Tafara Industries.
            All rights reserved.
          </p>

          <p>
            Steel Fabrication • Welding • Custom Steelwork
          </p>

        </div>
      </div>
  </footer>

  )
}

export default Footer