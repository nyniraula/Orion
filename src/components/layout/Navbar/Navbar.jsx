import { Search, User, ShoppingBasket, Menu, X } from "lucide-react";
import siteLogo from "../../../assets/Orion.svg";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import SearchDropDown from "./SearchDropDown";

const linkItems = [
  { title: "Home" },
  { title: "Collections" },
  { title: "Sale" },
];

const Navbar = () => {
  //TODO: UI for Hamburger menu & btn click work
  //TODO: UI for Search Dropdown like Ralph Lauren with search products showcase
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full px-4 sm:px-6 lg:px-8 z-100 transition-all duration-300 bg-white">
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
          <Search strokeWidth={1} size={20} />
          <User strokeWidth={1} size={20} />
          <ShoppingBasket strokeWidth={1} size={20} />
          <button
            className="md:hidden"
            onClick={() => {
              setIsHamMenuOpen((prev) => !prev);
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
      {isHamMenuOpen && (
        <HamburgerMenu
          linkItems={linkItems}
          setIsHamMenuOpen={setIsHamMenuOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
