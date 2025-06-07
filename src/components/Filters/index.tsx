import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

export type SortOption = "price-asc" | "price-desc" | "size-asc" | "size-desc";

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  filterRoad: boolean;
  setFilterRoad: (v: boolean) => void;
  filterHeavyWaste: boolean;
  setFilterHeavyWaste: (v: boolean) => void;
  filterPopular: boolean;
  setFilterPopular: (v: boolean) => void;
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
  filterPopular,
  setFilterPopular,
  sortOption,
  setSortOption,
  themeColors,
}) => {
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        setShowCategoryMenu(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortPanel(false);
      }
    }
    if (showCategoryMenu || showSortPanel) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategoryMenu, showSortPanel]);

  return (
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

      <div />

      <div className="flex items-center gap-4 justify-end">
        <div className="relative" ref={categoryMenuRef}>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg border ${themeColors.inputBg} ${themeColors.text} border-gray-300 dark:border-gray-600 flex items-center gap-2 focus:outline-none transition-colors`}
            style={{ boxShadow: "none" }}
            onClick={() => setShowCategoryMenu((v) => !v)}
            tabIndex={0}
          >
            Categories
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showCategoryMenu && (
            <div
              className={`absolute left-0 mt-2 w-56 ${themeColors.cardBg} ${themeColors.text} border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 animate-fade-in`}
            >
              <ul className="py-2">
                <li>
                  <label className="flex items-center px-4 py-2 cursor-pointer rounded transition-colors">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-amber-600 bg-white dark:bg-black border-gray-300 focus:ring-amber-500 transition-colors dark:text-amber-400 dark:border-gray-600"
                      checked={filterRoad}
                      onChange={() => setFilterRoad(!filterRoad)}
                    />
                    <span className="ml-2">Road Permit Only</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center px-4 py-2 cursor-pointer rounded transition-colors">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-amber-600 bg-white dark:bg-black border-gray-300 focus:ring-amber-500 transition-colors dark:text-amber-400 dark:border-gray-600"
                      checked={filterHeavyWaste}
                      onChange={() => setFilterHeavyWaste(!filterHeavyWaste)}
                    />
                    <span className="ml-2">Heavy Waste Only</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center px-4 py-2 cursor-pointer rounded transition-colors">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-amber-600 bg-white dark:bg-black border-gray-300 focus:ring-amber-500 transition-colors dark:text-amber-400 dark:border-gray-600"
                      checked={filterPopular}
                      onChange={() => setFilterPopular(!filterPopular)}
                    />
                    <span className="ml-2">Most Popular Only</span>
                  </label>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative w-56">
          <select
            className={`w-full px-4 py-3 rounded-lg ${themeColors.inputBg} ${themeColors.text} border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none`}
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
    </div>
  );
};

export default Filters;
