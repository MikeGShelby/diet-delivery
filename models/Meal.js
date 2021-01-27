const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Meal model
class Meal extends Model {
  static selectMeal(body, models) {
    return models.SelectMeal.create({
      user_id: body.user_id,
      post_id: body.meal_id
    }).then(() => {
      return Meal.findOne({
        where: {
          id: body.meal_id
        },
        attributes: [
          'id',
          'description',
          'title',
          'image',
          'created_at'
        ]
      });
    });
  }
}

// create fields/columns for Meal model
Meal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.BLOB
      },
      price: {
        type: DataTypes.DECIMAL
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'meal'
    }
);

module.exports = Meal;