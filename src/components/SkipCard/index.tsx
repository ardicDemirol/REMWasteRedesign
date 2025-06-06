import React from "react";
import type { Skip } from "../../types/skip";
import { getDisplayPrice } from "../../utils/price";
import { FiInfo, FiCheck, FiBox, FiMaximize } from "react-icons/fi";
import { themeColors } from "../../constants/theme";

interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  showPanel: boolean;
  darkMode: boolean;
  onClick: (id: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  selected,
  showPanel,
  darkMode,
  onClick,
}) => {
  const colors = themeColors(darkMode);
  return (
    <div
      onClick={() => onClick(skip.id)}
      className={`${
        colors.cardBg
      } rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
        selected && showPanel ? `ring-4 ${colors.ring}` : ""
      }`}
      role="button"
      tabIndex={0}
      aria-label={`Select ${skip.size} Yard Skip for £${getDisplayPrice(skip)}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(skip.id)}
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
            className={`absolute top-3 left-3 ${colors.popular} text-xs font-bold px-3 py-1 rounded-full`}
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
            selected && showPanel
              ? `${colors.primary} ${colors.primaryText}`
              : `${colors.secondary} ${colors.secondaryText}`
          }`}
          aria-label={`Select ${skip.size} Yard Skip`}
        >
          {selected && showPanel ? (
            <>
              <FiCheck className="mr-2" /> Selected
            </>
          ) : (
            "Select Skip"
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
