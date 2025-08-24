import dotenv from "dotenv";
import mongoose from "mongoose";
import Plant from "../models/plantModel.js"; 

dotenv.config();

const plants = [
  { name: "Aloe Vera", price: 199, categories: ["Indoor", "Medicinal", "Low Maintenance"], inStock: true },
  { name: "Snake Plant", price: 249, categories: ["Indoor", "Air Purifying", "Low Maintenance"], inStock: true },
  { name: "Spider Plant", price: 179, categories: ["Indoor", "Air Purifying"], inStock: true },
  { name: "Peace Lily", price: 299, categories: ["Indoor", "Flowering", "Air Purifying"], inStock: true },
  { name: "Jasmine", price: 399, categories: ["Outdoor", "Fragrant", "Flowering"], inStock: true },
  { name: "Tulsi (Holy Basil)", price: 99, categories: ["Medicinal", "Herb", "Indoor"], inStock: true },
  { name: "Lavender", price: 349, categories: ["Outdoor", "Fragrant", "Medicinal"], inStock: true },
  { name: "Rose Plant", price: 299, categories: ["Outdoor", "Flowering", "Fragrant"], inStock: true },
  { name: "Orchid", price: 499, categories: ["Indoor", "Flowering", "Home Decor"], inStock: true },
  { name: "Cactus", price: 149, categories: ["Succulent", "Low Maintenance"], inStock: true },
  { name: "Mint", price: 89, categories: ["Herb", "Edible"], inStock: true },
  { name: "Coriander", price: 79, categories: ["Herb", "Edible"], inStock: true },
  { name: "Money Plant", price: 199, categories: ["Indoor", "Air Purifying", "Home Decor"], inStock: true },
  { name: "Bonsai Ficus", price: 899, categories: ["Bonsai", "Indoor", "Home Decor"], inStock: true },
  { name: "Bamboo Palm", price: 299, categories: ["Indoor", "Air Purifying", "Home Decor"], inStock: true },
  { name: "Marigold", price: 149, categories: ["Outdoor", "Flowering", "Seasonal"], inStock: true },
  { name: "Hibiscus", price: 199, categories: ["Outdoor", "Flowering", "Medicinal"], inStock: true },
  { name: "Aloe Juvenna", price: 249, categories: ["Succulent", "Indoor"], inStock: true },
  { name: "Tulip", price: 399, categories: ["Outdoor", "Flowering", "Seasonal"], inStock: true },
  { name: "Chrysanthemum", price: 259, categories: ["Outdoor", "Flowering", "Colorful Foliage"], inStock: true },
  { name: "Neem Plant", price: 199, categories: ["Medicinal", "Outdoor"], inStock: true },
  { name: "Fiddle Leaf Fig", price: 499, categories: ["Indoor", "Home Decor", "Colorful Foliage"], inStock: true },
  { name: "Rosemary", price: 189, categories: ["Herb", "Edible", "Fragrant"], inStock: true },
  { name: "Basil", price: 149, categories: ["Herb", "Edible", "Medicinal"], inStock: true },
  { name: "Bougainvillea", price: 299, categories: ["Outdoor", "Flowering", "Seasonal"], inStock: true },
  { name: "Croton", price: 259, categories: ["Indoor", "Colorful Foliage"], inStock: true },
  { name: "Fern", price: 179, categories: ["Indoor", "Air Purifying"], inStock: true },
  { name: "Gardenia", price: 349, categories: ["Outdoor", "Fragrant", "Flowering"], inStock: true },
  { name: "Camellia", price: 379, categories: ["Outdoor", "Flowering"], inStock: true },
  { name: "Ginger", price: 229, categories: ["Medicinal", "Edible", "Herb"], inStock: true },
  { name: "Lemon Tree", price: 599, categories: ["Outdoor", "Edible", "Seasonal"], inStock: true },
  { name: "Guava Tree", price: 699, categories: ["Outdoor", "Edible"], inStock: true },
  { name: "Mango Sapling", price: 799, categories: ["Outdoor", "Edible", "Seasonal"], inStock: true },
  { name: "Banana Plant", price: 499, categories: ["Outdoor", "Edible"], inStock: true },
  { name: "Chilli Plant", price: 139, categories: ["Herb", "Edible"], inStock: true },
  { name: "Oregano", price: 129, categories: ["Herb", "Edible"], inStock: true },
  { name: "Parsley", price: 109, categories: ["Herb", "Edible"], inStock: true },
  { name: "Thyme", price: 139, categories: ["Herb", "Edible", "Fragrant"], inStock: true },
  { name: "Bamboo", price: 349, categories: ["Indoor", "Home Decor", "Air Purifying"], inStock: true },
  { name: "Begonia", price: 239, categories: ["Indoor", "Flowering", "Colorful Foliage"], inStock: true },
  { name: "Geranium", price: 189, categories: ["Outdoor", "Flowering"], inStock: true },
  { name: "Zinnia", price: 159, categories: ["Outdoor", "Flowering", "Seasonal"], inStock: true },
  { name: "Petunia", price: 169, categories: ["Outdoor", "Flowering"], inStock: true },
  { name: "Coleus", price: 219, categories: ["Indoor", "Colorful Foliage"], inStock: true },
  { name: "Ixora", price: 259, categories: ["Outdoor", "Flowering"], inStock: true },
  { name: "Pansy", price: 179, categories: ["Outdoor", "Flowering", "Seasonal"], inStock: true },
  { name: "Clove Plant", price: 399, categories: ["Medicinal", "Herb"], inStock: true },
  { name: "Peppermint", price: 149, categories: ["Herb", "Edible", "Fragrant"], inStock: true },
  { name: "Bay Leaf Plant", price: 229, categories: ["Herb", "Edible", "Medicinal"], inStock: true },
  { name: "Sage", price: 199, categories: ["Herb", "Edible", "Medicinal"], inStock: true },
];


async function run() {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("Connected ✅");

    await Plant.deleteMany({});
    await Plant.insertMany(plants);

    console.log(`Seeded ${plants.length} plants 🌱`);
  } catch (e) {
    console.error("Error seeding:", e);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
