import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import PlantGrid from "./components/PlantGrid";
import Loader from "./components/Loader";
import AddPlantModal from "./components/AddPlantModal";
import usePlants from "./hooks/usePlants.js";
import Pagination from "./components/Pagination.jsx";

export default function App() {
  const { data, loading, error, query, setQuery } = usePlants();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Sync with localStorage + <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onSearch = useCallback(
    (v) => setQuery((q) => ({ ...q, page: 1, search: v || undefined })),
    [setQuery]
  );

  const onCategory = useCallback(
    (c) => setQuery((q) => ({ ...q, page: 1, category: c || undefined })),
    [setQuery]
  );

  const pages = useMemo(
    () => Array.from({ length: data.pages }, (_, i) => i + 1),
    [data.pages]
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {/* Pass darkMode + setDarkMode into Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container-px mx-auto max-w-7xl space-y-4 py-6">
        {/* Controls */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <SearchBar onSearch={onSearch} />
          </div>
          <div className="flex flex-col gap-4">
            <Filters selected={query.category} onChange={onCategory} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Total: {data.total}
          </p>
          <button className="btn-primary" onClick={() => setOpen(true)}>
            + Add Plant (Admin)
          </button>
        </div>

        {/* Content */}
        {loading && <Loader text="Fetching plants..." />}
        {error && (
          <div className="rounded-xl border border-red-300 bg-red-50 dark:bg-red-900/40 dark:border-red-500 p-3 text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <PlantGrid
              plants={data.items}
              pages={pages}
              query={query}
              setQuery={setQuery}
            />
            <Pagination pages={pages} query={query} setQuery={setQuery} />
          </>
        )}
      </main>

      {/* Add Plant Modal */}
      <AddPlantModal
        open={open}
        onClose={() => setOpen(false)}
        onCreated={() => setQuery((q) => ({ ...q }))}
      />
    </div>
  );
}
