import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://username:password@localhost:5432/mydatabase",
  {
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() =>
    console.log("Connection to PostgreSQL has been established successfully.")
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;
