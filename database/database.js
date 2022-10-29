const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DB_NAME, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00"
});

module.exports = connection;
