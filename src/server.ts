import express from "express";
import sequelize from "./config/database";
import {
  createUserController,
  getUsersController,
} from "./controller/userController";

// Initialize Express
const app = express();
app.use(express.json());

// Define routes
app.post("/users", createUserController);
app.get("/users", getUsersController);

// Test the database connection and sync models
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to PostgreSQL has been established successfully.");
    return sequelize.sync(); // Sync models with the database
  })
  .then(() => console.log("Database synchronized successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
