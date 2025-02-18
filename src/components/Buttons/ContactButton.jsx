import React from "react";
import Button from "./Button";

const ContactButton = ({ onClick, closeMenu, ...props }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (closeMenu) closeMenu();
  };

  return (
    <Button variant="white" href="#contact" onClick={handleClick} {...props}>
      Contattami
    </Button>
  );
};

export default ContactButton;
