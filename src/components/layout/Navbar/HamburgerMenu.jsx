import { ChevronRight } from "lucide-react";

const HamburgerMenu = ({ linkItems, setIsHamMenuOpen }) => {
  return (
    <div
      className="w-full bg-white px-6 pb-8 pt-4 flex flex-col gap-2  md:hidden  animate-slide-down"
      onClick={() => {
        setIsHamMenuOpen(false);
      }}
    >
      {linkItems.map((el, idx) => {
        return (
          <button
            className=" py-3 px-2 flex items-center justify-between hover:bg-[#f6f6f6]"
            key={idx}
          >
            <span>{el.title}</span>
            <span>
              <ChevronRight strokeWidth={0.8} size={20} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default HamburgerMenu;
