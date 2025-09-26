import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import contactRoutes from "./routes/contact.js";
import postsRoutes from "./routes/posts.js";
import db from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
  })
);

app.use(express.json());

// POST endpoint to receive form data
app.use("/contact", contactRoutes);

app.use("/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, async () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);

  try {
    await db.raw("SELECT 1+1 AS result");
    console.log("✅ Database connection successful");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
