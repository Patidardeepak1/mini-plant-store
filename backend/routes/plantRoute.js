import express from "express";
import {
  getPlants,
  addPlant,
  addPlantValidations,
} from "../controller/plantController.js";

const router = express.Router();

router.get("/", getPlants);
router.post("/add", addPlantValidations, addPlant);

export default router;
