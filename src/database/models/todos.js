"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todos.init(
    {
      username: DataTypes.STRING,
      text: DataTypes.STRING,
      difficulty: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      assignee: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "todos",
    }
  );
  return todos;
};
