import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Import the sequelize instance from config

// Define the User model
class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
}

// Initialize the User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Username cannot be null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Email must be unique
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: "User",
    tableName: "users",
    timestamps: false, // Disable timestamps
  }
);

export default User;
