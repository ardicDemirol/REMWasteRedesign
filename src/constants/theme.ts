export const themeColors = (darkMode: boolean) => ({
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
});
