function Pagination({ pages, query, setQuery }) {
  if (pages.length <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* Prev Button */}
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
        disabled={query.page === 1}
        onClick={() => setQuery((q) => ({ ...q, page: q.page - 1 }))}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 rounded ${
            query.page === p
              ? "bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
          onClick={() => setQuery((q) => ({ ...q, page: p }))}
        >
          {p}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
        disabled={query.page === pages.length}
        onClick={() => setQuery((q) => ({ ...q, page: q.page + 1 }))}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
