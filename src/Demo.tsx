import { useState } from "react";
import {
  FiCheck,
  FiInfo,
  FiTruck,
  FiBox,
  FiMaximize,
  FiArrowRight,
} from "react-icons/fi";

interface Skip {
  size: string;
  price: number;
  period: string;
  road: boolean;
  dimensions: string;
  capacity: string;
  popular?: boolean;
}

const skips: Skip[] = [
  {
    size: "4 Yard",
    price: 211,
    period: "14 days",
    road: false,
    dimensions: "3.5' x 5' x 3'",
    capacity: "20-25 bags",
    popular: true,
  },
  // Other skip data...
];

export default function SkipSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "detail">("grid");

  const handleSelect = (size: string) => {
    setSelected(size === selected ? null : size);
    setView("detail");
  };

  const selectedSkip = skips.find((s) => s.size === selected);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Header */}
      <div className="bg-indigo-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Skip Hire Made Simple</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Select the perfect skip size for your project with our easy-to-use
          sizing guide
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {view === "grid" ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skips.map((skip) => (
                <div
                  key={skip.size}
                  onClick={() => handleSelect(skip.size)}
                  className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl border-l-8 ${
                    skip.popular
                      ? "border-l-indigo-500"
                      : "border-l-transparent"
                  } ${selected === skip.size ? "ring-2 ring-indigo-500" : ""}`}
                >
                  {skip.popular && (
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <FiTruck className="text-indigo-600 text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {skip.size}
                    </h3>
                  </div>

                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <FiMaximize className="mr-2 text-indigo-500" />
                      <span>{skip.dimensions}</span>
                    </div>
                    <div className="flex items-center">
                      <FiBox className="mr-2 text-indigo-500" />
                      <span>{skip.capacity}</span>
                    </div>
                    {skip.road && (
                      <div className="flex items-center text-amber-600">
                        <FiInfo className="mr-2" />
                        <span>Road permit required</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      £{skip.price}
                    </span>
                    <span className="text-gray-500">{skip.period}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Need help choosing?
              </h3>
              <p className="text-gray-600">
                Our 4 Yard skip is perfect for most household projects. Larger
                projects may require an 8 Yard or bigger. Contact us if you're
                unsure.
              </p>
            </div>
          </div>
        ) : (
          selectedSkip && (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <button
                  onClick={() => setView("grid")}
                  className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                >
                  <FiArrowRight className="transform rotate-180 mr-2" />
                  Back to all sizes
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedSkip.size} Skip
                    </h2>
                    <div className="flex items-center space-x-6 mb-6">
                      <span className="text-4xl font-bold text-indigo-600">
                        £{selectedSkip.price}
                      </span>
                      <span className="text-lg text-gray-500">
                        {selectedSkip.period} hire
                      </span>
                    </div>

                    <div className="prose prose-indigo mb-8">
                      <p>
                        This skip is ideal for{" "}
                        {selectedSkip.capacity.toLowerCase()} of waste and
                        measures {selectedSkip.dimensions}.
                      </p>
                      {selectedSkip.road && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
                          <p className="text-amber-700">
                            <strong>Note:</strong> This size requires a road
                            permit for placement on public highways.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-200 flex items-center justify-center">
                        Book This Skip
                        <FiArrowRight className="ml-2" />
                      </button>

                      <div className="flex items-center justify-center space-x-4">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                          Need a permit?
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 font-medium">
                          Delivery information
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      What's included
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Free delivery and collection</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Environmentally responsible waste disposal</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>14 day hire period (unless specified)</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>24/7 customer support</span>
                      </li>
                    </ul>

                    <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-medium text-indigo-800 mb-2">
                        Need help?
                      </h4>
                      <p className="text-sm text-indigo-700">
                        Our team is available 7 days a week to help you choose
                        the right skip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
