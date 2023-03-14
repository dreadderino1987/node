const Sequelize = require("sequelize");

const sequelize = require("../util/mysql");

const Card = sequelize.define("card", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Card;
