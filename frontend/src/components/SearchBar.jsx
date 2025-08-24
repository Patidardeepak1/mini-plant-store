import { useMemo, useState } from "react";
import debounce from "lodash.debounce";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const debounced = useMemo(
    () =>
      debounce((v) => {
        onSearch(v);
      }, 400),
    [onSearch]
  );

  return (
    <div className="card p-3">
      <input
        className="input"
        placeholder="Search by plant name or category (e.g., 'home decor')"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounced(e.target.value);
        }}
      />
    </div>
  );
}
