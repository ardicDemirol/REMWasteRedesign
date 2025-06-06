import { useState, useEffect } from "react";
import {
  FiInfo,
  FiBox,
  FiMaximize,
  FiArrowRight,
  FiCheck,
  FiX,
  FiSearch,
  FiFilter,
  FiMoon,
  FiSun,
} from "react-icons/fi";

interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  dimensions: string;
  capacity: string;
  popular?: boolean;
  image: string;
}

const apiSkips = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.813",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.171",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.339",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.516",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.69",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.876",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.434",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.603",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];

const transformSkips = (apiSkips: any[]): Skip[] => {
  const sizeDetails: Record<
    number,
    { dimensions: string; capacity: string; image: string }
  > = {
    4: {
      dimensions: "3.5' x 5' x 3'",
      capacity: "20-25 black bags",
      image:
        "https://images.unsplash.com/photo-1606830733744-0ad38e29fb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    6: {
      dimensions: "4' x 6' x 3.5'",
      capacity: "30-35 black bags",
      image:
        "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    8: {
      dimensions: "5' x 7' x 4'",
      capacity: "40-45 black bags",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    10: {
      dimensions: "5.5' x 8' x 4.5'",
      capacity: "50-55 black bags",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    12: {
      dimensions: "6' x 8' x 5'",
      capacity: "60-65 black bags",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363e7e8b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    14: {
      dimensions: "7' x 9' x 5.5'",
      capacity: "70-75 black bags",
      image:
        "https://images.unsplash.com/photo-1600566752225-3f850c1622a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    16: {
      dimensions: "8' x 10' x 6'",
      capacity: "80-85 black bags",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    20: {
      dimensions: "10' x 12' x 7'",
      capacity: "100-110 black bags",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    40: {
      dimensions: "20' x 8' x 8'",
      capacity: "200-220 black bags",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  };

  return apiSkips.map((skip) => ({
    ...skip,
    dimensions:
      sizeDetails[skip.size]?.dimensions ||
      `${skip.size / 2}' x ${skip.size / 2 + 2}' x ${skip.size / 3}'`,
    capacity:
      sizeDetails[skip.size]?.capacity ||
      `${skip.size * 5}-${skip.size * 5 + 5} black bags`,
    image:
      sizeDetails[skip.size]?.image ||
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    popular: skip.size === 8 || skip.size === 6,
  }));
};

type SortOption = "price-asc" | "price-desc" | "size-asc" | "size-desc";

function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRoad, setFilterRoad] = useState(false);
  const [filterHeavyWaste, setFilterHeavyWaste] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("price-asc");
  const [darkMode, setDarkMode] = useState(false);
  const [skips, setSkips] = useState<Skip[]>([]);

  useEffect(() => {
    const transformed = transformSkips(apiSkips);
    setSkips(transformed);
  }, []);

  const selectedSkip = skips.find((skip) => skip.id === selected);

  const getDisplayPrice = (skip: Skip) => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    return Math.round(totalPrice);
  };

  const themeColors = {
    primary: darkMode
      ? "bg-amber-600 hover:bg-amber-700"
      : "bg-amber-500 hover:bg-amber-600",
    primaryText: "text-white",
    secondary: darkMode
      ? "bg-gray-700 hover:bg-gray-600"
      : "bg-gray-100 hover:bg-gray-200",
    secondaryText: darkMode ? "text-gray-100" : "text-gray-800",
    ring: "ring-amber-500",
    badge: darkMode ? "bg-amber-700" : "bg-amber-500",
    popular: "bg-yellow-400 text-gray-900",
    background: darkMode
      ? "bg-gray-900"
      : "bg-gradient-to-br from-amber-50 to-gray-100",
    text: darkMode ? "text-gray-100" : "text-gray-900",
    cardBg: darkMode ? "bg-gray-800" : "bg-white",
    inputBg: darkMode ? "bg-gray-700" : "bg-white",
  };

  const filteredSkips = skips
    .filter((skip) => {
      const matchesSearch = `${skip.size} Yard Skip`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRoadFilter = filterRoad ? skip.allowed_on_road : true;
      const matchesHeavyWasteFilter = filterHeavyWaste
        ? skip.allows_heavy_waste
        : true;
      return matchesSearch && matchesRoadFilter && matchesHeavyWasteFilter;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price_before_vat - b.price_before_vat;
        case "price-desc":
          return b.price_before_vat - a.price_before_vat;
        case "size-asc":
          return a.size - b.size;
        case "size-desc":
          return b.size - a.size;
        default:
          return 0;
      }
    });

  const handleCardClick = (skipId: number) => {
    if (showPanel && selected === skipId) {
      setShowPanel(false);
      return;
    }
    setSelected(skipId);
    setShowPanel(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-screen ${themeColors.background} ${themeColors.text} flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300`}
    >
      <div className="w-full max-w-6xl">
        {/* Header ve Kontroller */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
              Find Your Perfect Skip
            </h1>
            <p className="text-xl opacity-80">
              Compare sizes and select the right skip for your project
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 self-end md:self-auto"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <FiSun className="text-amber-300" /> : <FiMoon />}
          </button>
        </div>

        {/* Filtreleme ve Arama */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                className="form-checkbox h-5 w-5 text-amber-500 rounded focus:ring-amber-500"
                checked={filterRoad}
                onChange={() => setFilterRoad(!filterRoad)}
              />
              <span className="ml-2">Road Permit Only</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-amber-500 rounded focus:ring-amber-500"
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
            <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Skip Cards */}
        <div className="mb-12">
          {filteredSkips.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl">No skips match your search criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterRoad(false);
                  setFilterHeavyWaste(false);
                }}
                className={`mt-4 px-6 py-3 rounded-lg ${themeColors.secondary} ${themeColors.secondaryText} transition`}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSkips.map((skip) => (
                <div
                  key={skip.id}
                  onClick={() => handleCardClick(skip.id)}
                  className={`${
                    themeColors.cardBg
                  } rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selected === skip.id && showPanel
                      ? `ring-4 ${themeColors.ring}`
                      : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${
                    skip.size
                  } Yard Skip for £${getDisplayPrice(skip)}`}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleCardClick(skip.id)
                  }
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={skip.image}
                      alt={`${skip.size} Yard Skip`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {skip.size} Yard Skip
                      </h3>
                      <p className="text-white/90">
                        {skip.hire_period_days} day hire period
                      </p>
                    </div>
                    {skip.popular && (
                      <div
                        className={`absolute top-3 left-3 ${themeColors.popular} text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        MOST POPULAR
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        STARTING FROM
                      </span>
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">
                        £{getDisplayPrice(skip)}
                      </span>
                    </div>

                    <div
                      className={`space-y-3 text-sm mb-6 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <FiMaximize className="mr-3 text-amber-500" />
                        <span>{skip.dimensions}</span>
                      </div>
                      <div className="flex items-center">
                        <FiBox className="mr-3 text-amber-500" />
                        <span>{skip.capacity}</span>
                      </div>
                      {skip.allowed_on_road && (
                        <div className="flex items-center text-amber-500 dark:text-amber-400">
                          <FiInfo className="mr-3" />
                          <span>Road permit required</span>
                        </div>
                      )}
                      {skip.allows_heavy_waste && (
                        <div className="flex items-center text-green-500 dark:text-green-400">
                          <FiCheck className="mr-3" />
                          <span>Allows heavy waste</span>
                        </div>
                      )}
                    </div>

                    <button
                      className={`w-full py-3 px-4 rounded-xl font-bold transition-colors flex items-center justify-center ${
                        selected === skip.id && showPanel
                          ? `${themeColors.primary} ${themeColors.primaryText}`
                          : `${themeColors.secondary} ${themeColors.secondaryText}`
                      }`}
                      aria-label={`Select ${skip.size} Yard Skip`}
                    >
                      {selected === skip.id && showPanel ? (
                        <>
                          <FiCheck className="mr-2" /> Selected
                        </>
                      ) : (
                        "Select Skip"
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Panel */}
        {showPanel && selectedSkip && (
          <>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
              onClick={() => setShowPanel(false)}
              aria-hidden="true"
            />

            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div
                className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${themeColors.cardBg}`}
              >
                <button
                  onClick={() => setShowPanel(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Close modal"
                >
                  <FiX className="text-gray-500 dark:text-gray-400 text-xl" />
                </button>

                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={selectedSkip.image}
                        alt={`${selectedSkip.size} Yard Skip`}
                        className="w-full h-full object-cover"
                      />
                      {selectedSkip.popular && (
                        <div
                          className={`absolute top-4 left-4 ${themeColors.popular} text-xs font-bold px-3 py-1 rounded-full`}
                        >
                          POPULAR CHOICE
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:w-3/5 p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 id="modal-title" className="text-3xl font-bold">
                          {selectedSkip.size} Yard Skip
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedSkip.hire_period_days} day hire period
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-amber-600 dark:text-amber-500">
                          £{getDisplayPrice(selectedSkip)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          (VAT included)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div
                        className={`p-4 rounded-xl ${
                          darkMode ? "bg-gray-700" : "bg-gray-50"
                        }`}
                      >
                        <h3 className="font-bold mb-2">Dimensions</h3>
                        <p>{selectedSkip.dimensions}</p>
                      </div>
                      <div
                        className={`p-4 rounded-xl ${
                          darkMode ? "bg-gray-700" : "bg-gray-50"
                        }`}
                      >
                        <h3 className="font-bold mb-2">Capacity</h3>
                        <p>{selectedSkip.capacity}</p>
                      </div>
                      {selectedSkip.transport_cost && (
                        <div
                          className={`p-4 rounded-xl ${
                            darkMode ? "bg-gray-700" : "bg-gray-50"
                          }`}
                        >
                          <h3 className="font-bold mb-2">Transport Cost</h3>
                          <p>£{selectedSkip.transport_cost}</p>
                        </div>
                      )}
                      {selectedSkip.per_tonne_cost && (
                        <div
                          className={`p-4 rounded-xl ${
                            darkMode ? "bg-gray-700" : "bg-gray-50"
                          }`}
                        >
                          <h3 className="font-bold mb-2">Per Tonne Cost</h3>
                          <p>£{selectedSkip.per_tonne_cost}</p>
                        </div>
                      )}
                      {selectedSkip.allowed_on_road && (
                        <div
                          className={`p-4 rounded-xl sm:col-span-2 border ${
                            darkMode
                              ? "bg-amber-900/30 border-amber-800"
                              : "bg-amber-50 border-amber-100"
                          }`}
                        >
                          <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center">
                            <FiInfo className="mr-2" /> Road Permit Required
                          </h3>
                          <p className="text-amber-600 dark:text-amber-300">
                            This size requires a permit if placed on public
                            roads (additional cost may apply).
                          </p>
                        </div>
                      )}
                      {selectedSkip.allows_heavy_waste && (
                        <div
                          className={`p-4 rounded-xl sm:col-span-2 border ${
                            darkMode
                              ? "bg-green-900/30 border-green-800"
                              : "bg-green-50 border-green-100"
                          }`}
                        >
                          <h3 className="font-bold text-green-700 dark:text-green-400 mb-1 flex items-center">
                            <FiCheck className="mr-2" /> Allows Heavy Waste
                          </h3>
                          <p className="text-green-600 dark:text-green-300">
                            This skip can handle heavy materials like soil and
                            rubble.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        onClick={() => setShowPanel(false)}
                        className={`px-6 py-4 border-2 rounded-xl font-bold transition flex-1 ${
                          darkMode
                            ? "border-gray-600 hover:bg-gray-700"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                        aria-label="Back to all sizes"
                      >
                        Back to All Sizes
                      </button>
                      <button
                        className={`px-6 py-4 rounded-xl font-bold text-white transition flex-1 flex items-center justify-center gap-3 ${themeColors.primary}`}
                        aria-label="Book this skip"
                      >
                        <span>Book This Skip</span>
                        <FiArrowRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
