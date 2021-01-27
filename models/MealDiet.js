const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MealDiet extends Model {}

MealDiet.init(
  // TABLE COLUMN DEFINITIONS
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meal',
        key:'id'
      }
    },
    diet_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'diet',
          key:'id'
        }
      }
  },
  // TABLE CONFIGURATION OPTIONS
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal_diet',
  }
);

module.exports = MealDiet;
