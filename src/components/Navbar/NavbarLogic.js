import { useState } from "react";

const NavbarLogic = () => {
  const links = ["Home", "About", "Project", "Contact"];
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return {
    links,
    showSidebar,
    showBackdrop,
  };
};

export default NavbarLogic;
