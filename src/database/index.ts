import { Sequelize } from "sequelize-typescript";

// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = []

sequelize.addModels(models);

export default sequelize;