import {useEffect, useState} from "react";
import {HiOutlineMenuAlt3, HiOutlineX} from "react-icons/hi";

const navLinks = [
  {name: "Home", href: "/"},
   {name: "About", href: "/"},
    {name: "Services", href: "/"},
     {name: "Projects", href: "/"},
      {name: "Gallery", href: "/"},
       {name: "Contact", href: "/"},
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900": "bg-blue-200"}`}
    
    >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
       {/*logo*/}
       <a href="/" className="flex flex-col">
       <span className={`text-2xl font-extrabold tracking-wide ${scrolled ? "text-white": "text-gray-900"}`}
       >TAFARA</span>
       <span className="text-sm uppercase tracking-[4px] text-blue-400">
        INDUSTRIES
       </span>
       </a>
       {/*Destop Nav*/}
       <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
          key={link.name}
          href={link.href}
          className={`font-medium transition hover:text-orange-500 ${scrolled ? "text-white": "text-gray-500"}`}
          >
            {link.name}
          </a>
        ))}
        <a href="/contact" className="rounded-5xl rounded bg-blue-400 px-15  font-semibold text-white transition hover:bg-blue-600 m-8"
        >
          Get a Quote
        </a>
       </nav>
       {/*Mobile Button*/}
       <button
       onClick={() => setIsOpen(!isOpen)}
       className={`lg:hidden text-3xl ${scrolled ? "text-white": "text-gray-900"}`}
        >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
    </div>
    {/*Mobile Menu*/}
    <nav
    className={`overflow-hidden bg-gray-900 transition-all duration-300 lg:hidden ${isOpen ? "max-h-[500px] " : "max-h-0"

    }`}
    >
      <nav className="flex flex-col px-6 py-4">
        {navLinks.map((link) => (
          <a
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="border-b border-gray-700 py-4 text-white transition hover:text-orange-500"
          >
            {link.name}
          </a>
        ))}
        <a
        href="/contact"
        className="mt-4 rounded-md bg-orange-600 px-5 py-3 fontsemibold text-white transition hover:bg-orange-700">
          Get a Quote!
        </a>
      </nav>
    </nav>
    </header>
  )
}

export default Navbar