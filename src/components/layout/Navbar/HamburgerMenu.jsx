const HamburgerMenu = ({ linkItems, setIsHamMenuOpen }) => {
  return (
    <button
      className="w-full bg-white px-8 pb-8 pt-4 flex flex-col gap-2 md:hidden border-t border-gray-400"
      onClick={() => {
        setIsHamMenuOpen(false);
      }}
    >
      {linkItems.map((el, idx) => {
        return (
          <div className=" py-3 flex items-center justify-between" key={idx}>
            <span>{el.title}</span>
            <span>{">"}</span>
          </div>
        );
      })}
    </button>
  );
};

export default HamburgerMenu;
