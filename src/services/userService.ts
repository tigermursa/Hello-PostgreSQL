import { UserInterface } from "../interface/userInterface";
import User from "../models/userModel";

export const createUser = async (user: UserInterface) => {
  try {
    const newUser = await User.create(user as any);
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + "error");
  }
};

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + "error");
  }
};
