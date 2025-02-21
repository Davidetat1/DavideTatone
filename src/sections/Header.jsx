import React from "react";
import { menuItems } from "../constants/index.jsx";
import Button from "../components/Buttons/Button.jsx";
import { HiMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import MobileMenu from "../components/MobileMenu.jsx";
import Logo from "../components/Logo.jsx";
import { motion } from "framer-motion";

const Header = ({ menuOpen, setMenuOpen }) => {
  const logoVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 z-10 w-full px-4 py-4"
        initial="hidden"
        animate="visible"
      >
        <nav
          className="container flex items-center 
          justify-between rounded-full border-2 
        border-white/10 bg-circular-gradient p-1 backdrop-blur"
        >
          <motion.div
            className="flex items-center"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#hero" aria-label="Home">
              <Logo className="h-8 w-14 md:h-12 md:w-full my-1" />
            </a>
          </motion.div>
          <motion.ul className="hidden space-x-4 md:flex">
            {menuItems.map((item) => (
              <motion.li key={item.href} variants={menuItemVariants}>
                <a href={item.href} className="nav-item">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="hidden md:block"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Button variant="white" href="#contact">
              Contattami
            </Button>
          </motion.div>

          {/* Menu Icon */}

          <motion.button
            className="text-4xl  mr-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {menuOpen ? <BiX /> : <HiMenu />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
          aria-label="close Menu"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
