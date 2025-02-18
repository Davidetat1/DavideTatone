import Logo from "./Logo";
import ContactButton from "./Buttons/ContactButton";

const MobileMenu = ({ setMenuOpen, menuOpen, menuItems }) => {
  return (
    <div
      className={`fixed left-o top-o z-30 h-full w-3/4 
    transform border-r-2 border-white/15 bg-circular-gradient 
    px-4 backdrop-blur transition-transform
     duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="mt-3">
        <Logo className="h-20 w-13 mx-1" />
      </div>

      <hr className="my-2 border-2 border-white/5" />

      <ul className="my-5 flex-col flex space-y-3">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="nav-item p-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ContactButton
        variant="white"
        className={"mt-5"}
        closeMenu={() => setMenuOpen(false)}
      >
        Contattami
      </ContactButton>
    </div>
  );
};
export default MobileMenu;
