import React from "react";
import type { Skip } from "../../types/skip";
import { getDisplayPrice } from "../../utils/price";
import { themeColors } from "../../constants/theme";
import { FiInfo, FiCheck, FiArrowRight, FiX } from "react-icons/fi";

interface SkipDetailsModalProps {
  skip: Skip;
  darkMode: boolean;
  onClose: () => void;
}

const SkipDetailsModal: React.FC<SkipDetailsModalProps> = ({
  skip,
  darkMode,
  onClose,
}) => {
  const colors = themeColors(darkMode);
  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${colors.cardBg}`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Close modal"
          >
            <FiX className="text-gray-500 dark:text-gray-400 text-xl" />
          </button>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5">
              <div className="relative h-64 lg:h-full">
                <img
                  src={skip.image}
                  alt={`${skip.size} Yard Skip`}
                  className="w-full h-full object-cover"
                />
                {skip.popular && (
                  <div
                    className={`absolute top-4 left-4 ${colors.popular} text-xs font-bold px-3 py-1 rounded-full`}
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
                    {skip.size} Yard Skip
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skip.hire_period_days} day hire period
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-amber-600 dark:text-amber-500">
                    £{getDisplayPrice(skip)}
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
                  <p>{skip.dimensions}</p>
                </div>
                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <h3 className="font-bold mb-2">Capacity</h3>
                  <p>{skip.capacity}</p>
                </div>
                {skip.transport_cost && (
                  <div
                    className={`p-4 rounded-xl ${
                      darkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <h3 className="font-bold mb-2">Transport Cost</h3>
                    <p>£{skip.transport_cost}</p>
                  </div>
                )}
                {skip.per_tonne_cost && (
                  <div
                    className={`p-4 rounded-xl ${
                      darkMode ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <h3 className="font-bold mb-2">Per Tonne Cost</h3>
                    <p>£{skip.per_tonne_cost}</p>
                  </div>
                )}
                {skip.allowed_on_road && (
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
                      This size requires a permit if placed on public roads
                      (additional cost may apply).
                    </p>
                  </div>
                )}
                {skip.allows_heavy_waste && (
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
                      This skip can handle heavy materials like soil and rubble.
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onClose}
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
                  className={`px-6 py-4 rounded-xl font-bold text-white transition flex-1 flex items-center justify-center gap-3 ${colors.primary}`}
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
  );
};

export default SkipDetailsModal;
