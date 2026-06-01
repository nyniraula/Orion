import { Search, X } from "lucide-react";

const SearchDropdown = ({ setIsSearchBoxOpen }) => {
  return (
    <div className="bg-white w-full px-4 pb-6 md:px-8 md:pb-8  pt-4 flex items-center gap-2 md:gap-4 animate-slide-down">
      <div className="flex w-full">
        <button className="px-4 py-3 md:py-4 bg-[#f6f6f6] ">
          <Search strokeWidth={0.8} size={20} color="gray" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className=" px-4 py-3 md:py-4   bg-[#f6f6f6] w-full focus:outline-0 "
        />
      </div>

      <button
        onClick={() => {
          setIsSearchBoxOpen(false);
        }}
      >
        <X strokeWidth={0.6} size={32} />
      </button>
    </div>
  );
};

export default SearchDropdown;
