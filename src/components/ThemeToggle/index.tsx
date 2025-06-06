import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 self-end md:self-auto"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <FiSun className="text-amber-300" /> : <FiMoon />}
  </button>
);

export default ThemeToggle;
