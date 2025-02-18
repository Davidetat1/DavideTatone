import React from "react";
import { menuItems } from "../constants/index.jsx";
import Button from "../components/Buttons/Button.jsx";
import { HiMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import MobileMenu from "../components/MobileMenu.jsx";
import Logo from "../components/Logo.jsx";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <header className="fixed top-0 z-10 w-full px-4 py-4">
        <nav
          className="container flex items-center justify-between rounded-full border-2 
        border-white/10 bg-circular-gradient p-1 backdrop-blur"
        >
          <div className="flex items-center">
            <a href="#hero" aria-label="Home">
              <Logo className="h-8 w-14 md:h-12 md:w-full my-1" />
            </a>
          </div>
          <ul className="hidden space-x-4 md:flex">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-item">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button variant="white" href="#contact">
              Contattami
            </Button>
          </div>

          <button
            className="text-4xl  mr-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <BiX /> : <HiMenu />}
          </button>
        </nav>
      </header>

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
