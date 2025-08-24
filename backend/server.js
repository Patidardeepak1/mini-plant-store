import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db.js";
import plantsRouter from "./routes/plantRoute.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

const origin = "https://mini-plant-store-eosin.vercel.app";
app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/plants", plantsRouter);

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });
