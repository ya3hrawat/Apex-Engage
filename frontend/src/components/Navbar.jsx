import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoMobile from "../assets/logo-mobile.png";
import logoNew from "../assets/logonew.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { animate, AnimatePresence, delay, motion } from "framer-motion";

//Constant Data
import {Links} from "../constants/data.jsx";

function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
      },
    },
  };

  const btnVars = {
    initial: {
      x: "50vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
    exit: {
      x: "-50vh",
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  }

  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col items-center bg-transparent">
      <div className="flex w-full items-center justify-between pr-5 py-1 md:pt-0 pt-4">
        <a drag href="#Hero" className="hidden md:flex">
          <img src={logo} alt="logo" className="lg:w-[180px] w-[150px]" />
        </a>
        <div className="lg:rounded-2xl lg:backdrop-blur-xl px-6 py-4">
          <ul className="hidden gap-20 lg:flex">
            {Links.map((link, index) => (
              <li
                className={`text-md font-bold text-[#2f4f4f ] hover:scale-125 hover:text-[#ff8c00] transition duration-300`}
              >
                <a key={index} href={`#${link.title}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://calendly.com/apexengageofficial/30min"
          className="hidden lg:flex"
        >
          <button className="btn bg-[#4b0082] hover:translate-y-[-5px] hover:bg-[#4b0082] transition duration-300 text-[#fff] drop-shadow-lg">
            Get in touch
          </button>
        </a>
        <div className="lg:hidden text-[#4b0082] font-bold text-lg">
          <button onClick={toggleMobileMenu}>
            {isMobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <AnimatePresence>
          {isMobileMenu && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 w-full h-screen origin-top bg-[#ff8c00]"
            >
              <div className="py-1 flex justify-between items-center pr-5">
                <img src={logoMobile} alt="logo" width={180} />
                <div className="lg:hidden text-[#4b0082] font-bold text-lg">
                  <button onClick={toggleMobileMenu}>
                    {isMobileMenu ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full h-screen justify-center relative">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                >
                  <ul className="flex flex-col items-center justify-center gap-7 mt-[-150px]">
                    {Links.map((link, index) => (
                      <div className="overflow-hidden">
                        <motion.div variants={mobileLinkVars}>
                          <li
                            onClick={() => setIsMobileMenu(false)}
                            className={`text-lg font-bold text-[#2f4f4f] transition duration-300`}
                          >
                            <a key={index} href={`#${link.title}`}>
                              {link.title}
                            </a>
                          </li>
                        </motion.div>
                      </div>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                variants={btnVars}
                initial="initial"
                animate="open"
                exit="exit"
                className="self-center absolute bottom-[90px]">
                  <a
                    href="https://calendly.com/apexengageofficial/30min"
                  >
                    <button className="btn border-none bg-[#4b0082] text-[#fff]">
                      Connect
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
