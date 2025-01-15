import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

// Controller to create a user
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUser(req.body);
    res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    next(error);
  }
};

// Controller to get all users
export const getAllUsersController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getAllUsers();
    res
      .status(200)
      .json({ success: true, message: "Users retrieved successfully", users });
  } catch (error) {
    next(error);
  }
};

// Controller to get a single user by ID
export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    res
      .status(200)
      .json({ success: true, message: "User retrieved successfully", user });
  } catch (error) {
    next(error);
  }
};

// Controller to update a user by ID
export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await userService.updateUser(
      Number(req.params.id),
      req.body
    );
    res
      .status(200)
      .json({
        success: true,
        message: "User updated successfully",
        updatedUser,
      });
  } catch (error) {
    next(error);
  }
};

// Controller to delete a user by ID
export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userService.deleteUser(Number(req.params.id));
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
