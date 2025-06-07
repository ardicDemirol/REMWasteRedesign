import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`
    p-3 rounded-full border transition-colors
    ${
      darkMode
        ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
        : "bg-gray-100 border-gray-300 hover:bg-gray-200"
    }
  `}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? (
      <FiSun className="text-amber-300" />
    ) : (
      <FiMoon className="text-gray-500" />
    )}
  </button>
);

export default ThemeToggle;
