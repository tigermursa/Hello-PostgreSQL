// src/models/userModel.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../server"; // Import the sequelize instance from server.ts

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // Pass the sequelize instance here
    modelName: "User",
    tableName: "users",
    timestamps: false, // Optional: Adjust this based on whether you need timestamps
  }
);

export default User;
