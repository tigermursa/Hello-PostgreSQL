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

// Controller to get all users with pagination
export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extract page and limit from query parameters with default values
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string, 10) || 10; // Default to 10 items per page

    const { total, users } = await userService.getAllUsers(page, limit);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit), // Calculate total number of pages
      users,
    });
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
    res.status(200).json({
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
