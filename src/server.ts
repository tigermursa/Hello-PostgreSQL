// src/server.ts
import express from "express";
import { Sequelize } from "sequelize";
import {
  createUserController,
  getUsersController,
} from "./controller/userController";

// Set up Sequelize connection
const sequelize = new Sequelize(
  "postgres://postgres:newpassword@localhost:5432/mydatabase", // Update your database credentials
  {
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() =>
    console.log("Connection to PostgreSQL has been established successfully.")
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

// Initialize Express app
const app = express();
app.use(express.json());

// Define API routes
app.post("/users", createUserController);
app.get("/users", getUsersController);

// Sync Sequelize models
sequelize
  .sync()
  .then(() => {
    console.log("Database sync completed.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default sequelize;
