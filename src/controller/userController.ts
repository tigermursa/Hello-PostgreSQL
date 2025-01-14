import { Request, Response } from "express";
import { createUser, getUsers } from "../services/userService";

// Controller to create a user
export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const newUser = await createUser({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

// Controller to fetch all users
export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
