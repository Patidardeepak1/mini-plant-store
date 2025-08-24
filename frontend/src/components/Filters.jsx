const DEFAULT_CATEGORIES = [
  "Indoor",
  "Outdoor",
  "Succulent",
  "Air Purifying",
  "Home Decor",
  "Flowering",
  "Medicinal",
  "Herb",
  "Edible",
  "Low Maintenance",
  "Colorful Foliage",
  "Bonsai",
  "Fragrant",
  "Seasonal",
];

export default function Filters({ selected, onChange }) {
  return (
    <div className="card flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
      <div className="flex w-full flex-col gap-1 sm:w-auto">
        <label className="label">Category</label>
        <select
          className="input"
          value={selected || ""}
          onChange={(e) => onChange(e.target.value || undefined)}
        >
          <option value="">All</option>
          {DEFAULT_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
