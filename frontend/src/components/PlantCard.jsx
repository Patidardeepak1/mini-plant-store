import Badge from "./Badge";

export default function PlantCard({ plant }) {
  return (
    <div className="card overflow-hidden">
      {/* Plant Details */}
      <div className="p-4">
        {/* Name & Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            {plant.name}
          </h3>
          <span className="text-sm font-semibold text-green-700 dark:text-green-400">
            ₹{plant.price}
          </span>
        </div>

        {/* Categories */}
        <div className="mt-2 flex flex-wrap gap-2">
          {plant.categories?.slice(0, 4).map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        {/* Stock Status */}
        <div className="mt-3">
          {plant.inStock ? (
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              In Stock
            </span>
          ) : (
            <span className="text-sm font-medium text-red-600 dark:text-red-400">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
