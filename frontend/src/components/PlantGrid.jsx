import PlantCard from "./PlantCard";

export default function PlantGrid({ plants = [] }) {
  if (plants.length === 0) {
    return (
      <div className="card p-10 text-center text-gray-600">
        No plants found. Try changing filters.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {plants.map((p) => (
        <PlantCard key={p._id} plant={p} />
      ))}
    </div>
  );
}
