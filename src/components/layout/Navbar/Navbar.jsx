import { Search, User, ShoppingBasket, Menu, X } from "lucide-react";
import siteLogo from "../../../assets/Orion.svg";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import SearchDropDown from "./SearchDropDown";

const Navbar = () => {
  //TODO: UI for Hamburger menu & btn click work
  //TODO: UI for Search Dropdown like Ralph Lauren with search products showcase
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full px-4 sm:px-6 lg:px-8 z-100  bg-white">
      <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 ">
        {/* logo and title */}
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center">
            <img src={siteLogo} alt="Orion" />
          </div>
          <h3>Orion</h3>
        </div>

        {/* links */}
        <div className="hidden md:flex justify-center items-center gap-6">
          <a href="">Home</a>
          <a href="">Collections</a>
          <a href="">About</a>
        </div>

        {/* misc */}
        <div className="flex justify-center items-center gap-4">
          <Search strokeWidth={1.25} size={20} />
          <User strokeWidth={1.25} size={20} />
          <ShoppingBasket strokeWidth={1.25} size={20} />
          <button className="md:hidden">
            {isHamMenuOpen ? <X /> : <Menu strokeWidth={1.25} size={20} />}
          </button>
        </div>
      </div>
      {isHamMenuOpen && <HamburgerMenu />}
    </nav>
  );
};

export default Navbar;
