const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("pendaftaran", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "8111",
  logging: console.log,
  freezeTableName: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;

module.exports = db;
