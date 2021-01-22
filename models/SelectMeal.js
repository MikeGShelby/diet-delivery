const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SelectMeal extends Model {}

SelectMeal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'meal',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'select_meal'
    }
  );

module.exports = SelectMeal;