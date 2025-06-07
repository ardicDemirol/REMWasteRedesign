import { useState, useEffect, useMemo } from "react";
import type { Skip } from "./types/skip";
import { getSkips } from "./constants/skips";
import { transformSkips } from "./utils/transformSkips";
import { themeColors } from "./constants/theme";
import SkipCard from "./components/SkipCard";
import SkipDetailsModal from "./components/SkipDetailsModal";
import Filters from "./components/Filters";
import ThemeToggle from "./components/ThemeToggle";
import type { SortOption } from "./utils/sortSkips";
import { sortSkips } from "./utils/sortSkips";

function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRoad, setFilterRoad] = useState(false);
  const [filterHeavyWaste, setFilterHeavyWaste] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [skips, setSkips] = useState<Skip[]>([]);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("price-asc");

  useEffect(() => {
    const fetchData = async () => {
      const skips = await getSkips();
      const transformed = transformSkips(skips);
      setSkips(transformed);
    };

    fetchData();
  }, []);

  const selectedSkip = skips.find((skip) => skip.id === selected);

  const filteredSkips = useMemo(() => {
    const filtered = skips.filter((skip) => {
      const matchesSearch = `${skip.size} Yard Skip`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRoadFilter = filterRoad ? skip.allowed_on_road : true;
      const matchesHeavyWasteFilter = filterHeavyWaste
        ? skip.allows_heavy_waste
        : true;
      const matchesPopularFilter = filterPopular ? skip.popular : true;
      return (
        matchesSearch &&
        matchesRoadFilter &&
        matchesHeavyWasteFilter &&
        matchesPopularFilter
      );
    });
    return sortSkips(filtered, sortOption);
  }, [
    skips,
    searchTerm,
    filterRoad,
    filterHeavyWaste,
    filterPopular,
    sortOption,
  ]);

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

  const colors = themeColors(darkMode);

  return (
    <div
      className={`min-h-screen w-screen ${colors.background} ${colors.text} flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300`}
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
              Find Your Perfect Skip
            </h1>
            <p className="text-xl opacity-80">
              Compare sizes and select the right skip for your project
            </p>
          </div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterRoad={filterRoad}
          setFilterRoad={setFilterRoad}
          filterHeavyWaste={filterHeavyWaste}
          setFilterHeavyWaste={setFilterHeavyWaste}
          filterPopular={filterPopular}
          setFilterPopular={setFilterPopular}
          sortOption={sortOption}
          setSortOption={setSortOption}
          themeColors={colors}
        />
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
                className={`mt-4 px-6 py-3 rounded-lg ${colors.secondary} ${colors.secondaryText} transition`}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSkips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  selected={selected === skip.id}
                  showPanel={showPanel}
                  darkMode={darkMode}
                  hovered={hoveredCardId === skip.id}
                  onMouseEnter={() => setHoveredCardId(skip.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          )}
        </div>
        {showPanel && selectedSkip && (
          <SkipDetailsModal
            skip={selectedSkip}
            darkMode={darkMode}
            onClose={() => {
              setShowPanel(false);
              setHoveredCardId(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
