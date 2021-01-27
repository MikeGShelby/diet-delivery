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
        },
        onDelete: 'CASCADE'
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'meal',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'selected_meal'
    }
  );

module.exports = SelectMeal;