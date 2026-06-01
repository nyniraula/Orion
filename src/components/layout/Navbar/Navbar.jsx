import { Search, User, ShoppingBasket, Menu, X } from "lucide-react";
import siteLogo from "../../../assets/Orion.svg";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import SearchDropDown from "./SearchDropdown";

const linkItems = [
  { title: "Home" },
  { title: "Collections" },
  { title: "Sale" },
];

const Navbar = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-100 transition-all">
      <nav className="w-full px-4 sm:px-6 lg:px-8  duration-300 bg-white border-b border-gray-400">
        <div className="flex justify-between items-center h-16 md:h-18  ">
          {/* logo and title */}
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center">
              <img src={siteLogo} alt="Orion" />
            </div>
            <h3>Orion</h3>
          </div>
          {/* links */}
          <div className="hidden md:flex justify-center items-center gap-6">
            {linkItems.map((el, idx) => {
              return (
                <a href="" key={idx}>
                  {el.title}
                </a>
              );
            })}
          </div>
          {/* misc */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                setIsSearchBoxOpen(true);
                setIsHamMenuOpen(false);
              }}
            >
              <Search strokeWidth={1} size={20} />
            </button>
            <User strokeWidth={1} size={20} />
            <ShoppingBasket strokeWidth={1} size={20} />
            <button
              className="md:hidden"
              onClick={() => {
                setIsHamMenuOpen((prev) => !prev);
                setIsSearchBoxOpen(false);
              }}
            >
              {isHamMenuOpen ? (
                <X strokeWidth={1} size={20} />
              ) : (
                <Menu strokeWidth={1} size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isHamMenuOpen && (
        <HamburgerMenu
          linkItems={linkItems}
          setIsHamMenuOpen={setIsHamMenuOpen}
        />
      )}
      {isSearchBoxOpen && (
        <SearchDropDown setIsSearchBoxOpen={setIsSearchBoxOpen} />
      )}
    </div>
  );
};

export default Navbar;
