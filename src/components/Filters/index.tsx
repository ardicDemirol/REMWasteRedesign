import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

export type SortOption = "price-asc" | "price-desc" | "size-asc" | "size-desc";

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  filterRoad: boolean;
  setFilterRoad: (v: boolean) => void;
  filterHeavyWaste: boolean;
  setFilterHeavyWaste: (v: boolean) => void;
  sortOption: SortOption;
  setSortOption: (v: SortOption) => void;
  themeColors: ReturnType<typeof import("../../constants/theme").themeColors>;
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterRoad,
  setFilterRoad,
  filterHeavyWaste,
  setFilterHeavyWaste,
  sortOption,
  setSortOption,
  themeColors,
}) => (
  <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <FiSearch />
      </span>
      <input
        type="text"
        placeholder="Search skip sizes..."
        className={`w-full pl-10 pr-4 py-3 rounded-lg ${themeColors.inputBg} border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search skip sizes"
      />
    </div>

    <div className="flex items-center gap-4">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={filterRoad}
          onChange={() => setFilterRoad(!filterRoad)}
          className={`
      form-checkbox h-5 w-5 rounded transition-colors
      border-gray-300 dark:border-gray-600
      bg-white dark:bg-gray-700
      checked:bg-amber-500 dark:checked:bg-amber-600
      focus:ring-amber-500
    `}
        />
        <span className="ml-2">Road Permit Only</span>
      </label>

      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={`form-checkbox h-5 w-5 rounded border-gray-300 focus:ring-amber-500 transition-colors ${
            filterHeavyWaste
              ? "bg-amber-500 border-amber-500 dark:bg-amber-600 dark:border-amber-600"
              : "bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          }`}
          checked={filterHeavyWaste}
          onChange={() => setFilterHeavyWaste(!filterHeavyWaste)}
        />
        <span className="ml-2">Heavy Waste Only</span>
      </label>
    </div>

    <div className="relative">
      <select
        className={`w-full px-4 py-3 rounded-lg ${themeColors.inputBg} border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none`}
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value as SortOption)}
        aria-label="Sort by"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="size-asc">Size: Small to Large</option>
        <option value="size-desc">Size: Large to Small</option>
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <FiFilter />
      </span>
    </div>
  </div>
);

export default Filters;
