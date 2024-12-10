import { Search, ChevronDown } from "lucide-react";

const SearchBarComponent = () => {
  return (
    // Bagian Kiri
    <div className="flex justify-between items-center mb-8 px-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 pl-10 py-2 border-b border-gray-300 rounded-lg shadow-md"
      />

      <div className="absolute top-1/2  transform translate-x-1/2 translate-y-1/4 text-gray-400">
        <Search className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Show</span>
        <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border-b border-gray-300 shadow-md hover:bg-gray-50">
          Last 10 Transaction
          <ChevronDown className="h-5 w-5 translate-x-1/4 translate-y-1/6" />
        </button>

        <span className="text-gray-700 font-medium">Sort by</span>
        <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border-b border-gray-300 shadow-md hover:bg-gray-50">
          Date
          <ChevronDown className="h-5 w-5 translate-x-1/4 translate-y-1/6" />
        </button>
        <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border-b border-gray-300 shadow-md hover:bg-gray-50">
          Descending
          <ChevronDown className="h-5 w-5 translate-x-1/4 translate-y-1/6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBarComponent;
