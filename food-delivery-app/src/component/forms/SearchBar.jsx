import { Search } from "lucide-react";

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="mx-auto max-w-xl">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>
    </div>
  );
}

export default SearchBar;