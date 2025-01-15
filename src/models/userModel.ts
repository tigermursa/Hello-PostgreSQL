import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const User = sequelize.define(
  "User",
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
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSONB, // For storing multiple addresses
      allowNull: false,
    },
    phone: {
      type: DataTypes.JSONB, // For storing multiple phone numbers
      allowNull: false,
    },
    education: {
      type: DataTypes.JSONB, // For storing nested education information
      allowNull: false,
    },
    sscBoard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sscGPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    hscBoard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hscGPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    universityRoll: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true, // Adds createdAt and updatedAt
  }
);
