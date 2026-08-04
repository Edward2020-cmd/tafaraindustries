
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaFacebookF,FaInstagram,FaWhatsapp,  } from "react-icons/fa";

import { FiClock } from "react-icons/fi";

function TopBar() {
  return (
   <>
   <div className="hidden lg:block bg-gray-900 text-gray-300 text-sm">
    <div className="mx-auto flex max-w-7x1 items-center justify-between px-6 py-2">
        {/*leftside*/}
        <div className=" flex items-center gap-6">
            <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500"/>
                <span>+27 81 234 5678</span>
            </div>
            <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500"/>
                <span>info@tafaraindustries.co.za</span>
            </div>
 <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500"/>
                <span>Westonaria Gauteng Westrand</span>
            </div>
             <div className="flex items-center gap-2">
                <FiClock className="text-orange-500"/>
                <span>Mon - Fri : 08:00 - 17:00</span>
            </div>
        </div>
        {/*rightside*/}
        <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-orange-500">
                <FaFacebookF/>
            </a>
            <a href="#" className="transition hover:text-orange-500">
                <FaInstagram/>
            </a>
            <a href="#" className="transition hover:text-orange-500">
                <FaWhatsapp/>
            </a>
        </div>
    </div>
   </div>
   {/*Mobile*/}
   <div className="bg-gray-900 lg:hidden">
    <div className="flex justify-between px-5 py-3">
        <a href="tel:+27812345678" className="flex items-center gap-2 text-white">
            <FaPhoneAlt clasName="text-orange-500"/>
            <span>Call Us</span>
        </a>
        <a href="https://wa.me/27812345678" className="flex items-center gap-2 text-white">
            <FaPhoneAlt clasName="text-orange-500"/>
            <span>WhatsApp</span>
        </a>
    </div>
   </div>
   </>
  )
}
export default TopBar