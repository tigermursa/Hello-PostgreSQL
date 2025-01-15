import { User } from "../models/userModel";
import { UserInterface } from "../interface/userInterface";

// Service to create a new user
export const createUser = async (userData: UserInterface) => {
  return await User.create(userData as any);
};

// Service to fetch all users with pagination
export const getAllUsers = async (page: number, limit: number) => {
  const offset = (page - 1) * limit; // Calculate offset for pagination
  const { count, rows } = await User.findAndCountAll({
    offset,
    limit,
  });

  return { total: count, users: rows };
};

// Service to fetch a single user by ID
export const getUserById = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Service to update a user by ID
export const updateUser = async (
  id: number,
  updatedData: Partial<UserInterface>
) => {
  const user = await getUserById(id);
  return await user.update(updatedData);
};

// Service to delete a user by ID
export const deleteUser = async (id: number) => {
  const user = await getUserById(id);
  await user.destroy();
  return true;
};
