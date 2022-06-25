import { useState } from "react";

import Drawer from "./Drawer";
import LogoAndButton from "./LogoAndButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={closeDrawer} />
      <header className="flex justify-between items-center p-4 border-b">
        <LogoAndButton onClick={openDrawer} />
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-icon-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
