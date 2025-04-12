import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/whatwedo", text: "What We Do" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 px-10 flex items-center backdrop-blur-lg bg-black/50 shadow-lg z-[100]">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="hidden font-custom1 md:flex flex-1 justify-end gap-x-16 text-2xl text-white tracking-wider">
          {navLinks.slice(0, 2).map(({ to, text }) => (
            <li key={text} className="relative group">
              <Link to={to} className="transition duration-300">
                {text}
              </Link>
              {location.pathname === to && (
                <motion.div
                  className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-white"
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="mx-auto md:mx-24 flex-shrink-0">
          <img
            src="/logo.png"
            alt="LVS Logo"
            className="h-[64px] w-auto object-contain"
          />
        </div>

        <ul className="hidden font-custom1 md:flex flex-1 justify-start gap-x-16 text-2xl text-white tracking-wider">
          {navLinks.slice(2).map(({ to, text }) => (
            <li key={text} className="relative group">
              <Link to={to} className="transition duration-300 ">
                {text}
              </Link>
              {location.pathname === to && (
                <motion.div
                  className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-white"
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-3xl hamburger z-[1100]"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          ☰
        </button>
      </div>

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-md bg-gradient-to-b from-[black] to-[#5598a6] flex flex-col items-center space-y-5 mobile-menu z-[2000] pt-20 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white text-4xl z-[2100]"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <ul className="space-y-6 font-custom1 text-center">
          {navLinks.map(({ to, text }, index) => (
            <motion.li
              key={text}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <Link
                to={to}
                className="text-2xl text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>

              {location.pathname === to && (
                <motion.div
                  className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-white"
                  layoutId="mobile-underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
