import express from "express";
import {
  createUserController,
  getUsersController,
} from "./controller/userController";

const app = express();
app.use(express.json());

app.post("/users", createUserController);
app.get("/users", getUsersController);

export default app;
