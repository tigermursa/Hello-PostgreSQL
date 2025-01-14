// src/controller/userController.ts
import { Request, Response } from "express";
import User from "../models/userModel";

// Controller to create a new user
export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Controller to get all users
export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
};
