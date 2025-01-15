import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan"; //  morgan for logging
import {
  createUserController,
  getUsersController,
} from "./controller/userController";
import sequelize from "./config/database";

const app = express();

// Middleware: HTTP request logging
app.use(morgan("dev"));

// Middleware: JSON parsing
app.use(express.json());

// Root route
app.get("/", (_req: Request, res: Response) => {
  res.send("Server working fine!");
});

// User routes
app.post("/users", createUserController);
app.get("/users", getUsersController);

// Error handling middleware
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Database synchronization (sync models with the database)
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => console.error("Unable to sync database:", err));

export default app;
