import Toggle from "./Toggle";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-colors">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-green-600" />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Urvann Plants
          </h1>
        </div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}
