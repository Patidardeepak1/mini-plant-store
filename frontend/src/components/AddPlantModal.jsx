import { useState } from "react";
import { addPlant } from "../services/api";

export default function AddPlantModal({ open, onClose, onCreated }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [inStock, setInStock] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const priceNum = Number(price);
    const cats = categories
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    if (name.trim().length < 2) {
      return setError("Name must be at least 2 characters");
    }
    if (!Number.isFinite(priceNum) || priceNum < 0) {
      return setError("Price must be a positive number");
    }
    if (cats.length === 0) {
      return setError("Add at least one category");
    }

    try {
      setLoading(true);
      const payload = {
        name: name.trim(),
        price: priceNum,
        categories: cats,
        inStock,
      };
      const res = await addPlant(payload);
      onCreated?.(res);
      onClose?.();
    } catch (e) {
      setError(e?.response?.data?.errors?.[0]?.msg || "Failed to add plant");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="card w-full max-w-lg">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="text-lg font-semibold">Add Plant</h3>
          <button className="btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
        <form className="space-y-4 p-4" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-2 text-sm text-red-700">
              {error}
            </div>
          )}
          <div>
            <label className="label">Name</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Price (₹)</label>
            <input
              className="input"
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Categories (comma separated)</label>
            <input
              className="input"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="Indoor, Air Purifying"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="instock"
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            <label htmlFor="instock" className="label">
              In Stock
            </label>
          </div>
          <div className="pt-2">
            <button
              disabled={loading}
              className="btn-primary w-full"
              type="submit"
            >
              {loading ? "Adding..." : "Add Plant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
