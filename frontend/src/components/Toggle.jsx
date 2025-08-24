export default function Toggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
