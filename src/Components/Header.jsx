import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto mb-4 mt-4">
      <div className="flex justify-center mt-4">
        <div className="border inherit max-w-[1200px] h-[64px] w-full flex items-center justify-between px-6 background-secondary ">
          <div className="font-bold text-xl instrument-font text-white">SAMCREATES</div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#" className="text-white instrument-font font-medium transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition-colors">
                  WORK
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 right-0 bg-black bg-opacity-90 z-50">
          <nav className="py-4">
            <ul className="flex flex-col items-center gap-6">
              <li>
                <a href="#" className="text-white text-lg" onClick={toggleMenu}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-lg" onClick={toggleMenu}>
                  WORK
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-lg" onClick={toggleMenu}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
