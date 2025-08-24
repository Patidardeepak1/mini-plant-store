import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    categories: { type: [String], index: true, default: [] },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Useful indexes
PlantSchema.index({ name: "text", categories: "text" });
PlantSchema.index({ price: 1 });
PlantSchema.index({ inStock: 1 });

export default mongoose.model("Plant", PlantSchema);
