import { UserInterface } from "../interface/userInterface";
import User from "../models/userModel";

// Create a new user
export const createUser = async (user: UserInterface) => {
  try {
    const newUser = await User.create(user as any);
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + "error");
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error("Error fetching users: " + "error");
  }
};
