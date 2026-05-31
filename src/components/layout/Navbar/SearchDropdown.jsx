import { Search } from "lucide-react";

const SearchDropDown = () => {
  return (
    <div className="px-8">
      <span>
        <Search />
      </span>
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

export default SearchDropDown;
