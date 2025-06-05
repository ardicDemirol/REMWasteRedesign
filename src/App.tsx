import { useState } from "react";

interface Skip {
  size: string;
  price: number;
  period: string;
  road: boolean;
  dimensions?: string;
  capacity?: string;
}

const skips: Skip[] = [
  {
    size: "4 Yard Skip",
    price: 211,
    period: "14 day hire period",
    road: false,
    dimensions: "3.5' x 5' x 3'",
    capacity: "20-25 black bags",
  },
  {
    size: "5 Yard Skip",
    price: 241,
    period: "14 day hire period",
    road: false,
    dimensions: "4' x 6' x 3'",
    capacity: "25-30 black bags",
  },
  {
    size: "6 Yard Skip",
    price: 264,
    period: "14 day hire period",
    road: false,
    dimensions: "4' x 7' x 3.5'",
    capacity: "30-35 black bags",
  },
  {
    size: "8 Yard Skip",
    price: 295,
    period: "14 day hire period",
    road: false,
    dimensions: "5' x 8' x 4'",
    capacity: "40-45 black bags",
  },
  {
    size: "10 Yard Skip",
    price: 356,
    period: "14 day hire period",
    road: true,
    dimensions: "6' x 9' x 4.5'",
    capacity: "50-55 black bags",
  },
  {
    size: "12 Yard Skip",
    price: 390,
    period: "14 day hire period",
    road: true,
    dimensions: "6' x 10' x 5'",
    capacity: "60-65 black bags",
  },
  {
    size: "14 Yard Skip",
    price: 434,
    period: "14 day hire period",
    road: true,
    dimensions: "7' x 11' x 5.5'",
    capacity: "70-75 black bags",
  },
  {
    size: "16 Yard Skip",
    price: 510,
    period: "7 day hire period",
    road: true,
    dimensions: "8' x 12' x 6'",
    capacity: "80-85 black bags",
  },
  {
    size: "20 Yard Skip",
    price: 802,
    period: "14 day hire period",
    road: false,
    dimensions: "10' x 14' x 6.5'",
    capacity: "100-110 black bags",
  },
  {
    size: "40 Yard Skip",
    price: 877,
    period: "14 day hire period",
    road: true,
    dimensions: "12' x 18' x 7'",
    capacity: "200-220 black bags",
  },
];

function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const selectedSkip = skips.find((s) => s.size === selected);

  const handleCardClick = (skipSize: string) => {
    if (showPanel && selected === skipSize) {
      setShowPanel(false);
      return;
    }
    setSelected(skipSize);
    setShowPanel(true);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 text-gray-800 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Choose Your Skip Size
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect skip size for your project from our range of
            high-quality options
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skips.map((skip) => (
            <div
              key={skip.size}
              onClick={() => handleCardClick(skip.size)}
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-200 cursor-pointer flex flex-col ${
                selected === skip.size && showPanel
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              {/* Skip Header */}
              <div className="bg-blue-600 px-4 py-2">
                <h3 className="text-white font-semibold text-lg">
                  {skip.size}
                </h3>
              </div>

              {/* Skip Image */}
              <div className="p-4 flex justify-center">
                <div className="relative w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-yellow-400 rounded-md relative overflow-hidden border-2 border-yellow-600">
                    <div className="absolute top-0 left-0 w-full h-4 bg-yellow-600"></div>
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-yellow-600"></div>
                    <div className="text-center mt-6 text-xs font-bold text-gray-700">
                      {skip.size.toUpperCase()}
                    </div>
                  </div>
                  {skip.road && (
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Permit Required
                    </div>
                  )}
                </div>
              </div>

              {/* Skip Details */}
              <div className="px-4 pb-4 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{skip.period}</span>
                  <span className="text-2xl font-bold text-blue-600">
                    £{skip.price}
                  </span>
                </div>

                <div className="text-sm text-gray-700 space-y-1 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>{skip.dimensions}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span>{skip.capacity}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    selected === skip.size && showPanel
                      ? "bg-blue-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {selected === skip.size && showPanel ? "Selected" : "Select"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Panel */}
        {showPanel && selectedSkip && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
              onClick={() => setShowPanel(false)}
            />

            {/* Panel */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl border-t border-gray-200 px-6 py-4 transition-transform duration-300 transform translate-y-0">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedSkip.size}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-blue-600 font-bold text-xl">
                      £{selectedSkip.price}
                    </span>
                    <span className="text-gray-600">{selectedSkip.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Includes delivery, collection, and disposal.{" "}
                    {selectedSkip.road &&
                      "A permit may be required for road placement."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowPanel(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition flex items-center justify-center gap-2">
                    Continue to Checkout
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
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
