const { Model, DataTypes, BOOLEAN, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');

// create Meal model
class Meal extends Model {
  // static selectMeal(body, models) {
  //   return models.SelectMeal.create({
  //     user_id: body.user_id,
  //     post_id: body.meal_id
  //   }).then(() => {
  //     return Meal.findOne({
  //       where: {
  //         id: body.meal_id
  //       },
  //       attributes: [
  //         'id',
  //         'description',
  //         'title',
  //         'image',
  //         'created_at',
  //         'ingredients',
  //         'calories',
  //         'total_carbs',
  //         'total_sugars',
  //         'total_fats',
  //         'gf',
  //         'price'
  //       ]
  //     });
  //   });
  // }
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
        type: DataTypes.STRING
      },
      ingredients: {
          type: DataTypes.STRING,
          allowNull: false
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fat: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      protein: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
        total_carbohydrate: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
        sugars: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gf: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      price: {
        type: DECIMAL,
        allowNull: false
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'meal'
      },

);

module.exports = Meal;