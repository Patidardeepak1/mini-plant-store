import Plant from "../models/plantModel.js";
import { body, validationResult } from "express-validator";

export const getPlants = async (req, res) => {
  try {
    const { search = "", category = "", page = "1", limit = "20" } = req.query;

    const filter = {};

    if (search) {
      const regex = new RegExp(search, "i");
      filter.$or = [{ name: regex }, { categories: regex }];
    }

    if (category) {
      filter.categories = { $in: [category] };
    }

    const pageNum = Math.max(parseInt(page) || 1, 1);
    const limitNum = Math.min(Math.max(parseInt(limit) || 20, 1), 50);
    const skip = (pageNum - 1) * limitNum;

    const [items, total] = await Promise.all([
      Plant.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limitNum),
      Plant.countDocuments(filter),
    ]);

    res.json({
      items,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const addPlantValidations = [
  body("name")
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage("Name is required"),
  body("price").isFloat({ min: 0 }).withMessage("Price must be >= 0"),
  body("categories").isArray({ min: 1 }).withMessage("At least one category"),
  body("categories.*").isString().trim(),
  body("inStock").isBoolean().withMessage("inStock must be boolean"),
];

export const addPlant = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
