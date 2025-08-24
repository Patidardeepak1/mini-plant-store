import { useEffect, useState } from "react";
import { fetchPlants } from "../services/api.js";

export default function usePlants(initial = {}) {
  const [query, setQuery] = useState({ page: 1, limit: 20, ...initial });
  const [data, setData] = useState({ items: [], total: 0, page: 1, pages: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function run() {
      try {
        setLoading(true);
        setError("");
        const res = await fetchPlants(query);
        if (!ignore) setData(res);
      } catch (e) {
        setError(e?.response?.data?.message || "Failed to load plants");
      } finally {
        setLoading(false);
      }
    }
    run();
    return () => {
      ignore = true;
    };
  }, [JSON.stringify(query)]);

  return { query, setQuery, data, loading, error };
}
