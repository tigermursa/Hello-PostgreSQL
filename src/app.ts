import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import sequelize from "./config/database";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

// Database synchronization
sequelize
  .sync()
  .then(() => console.log("Database synchronized successfully"))
  .catch((err) => console.error("Database synchronization failed:", err));

export default app;
