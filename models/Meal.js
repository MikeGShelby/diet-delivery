const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Meal model
class Meal extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Meal.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'description',
          'title',
          'image',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE meal.id = vote.post_id)'),
            'vote_count'
          ]
        ]
      });
    });
  }
}

// create fields/columns for Post model
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
        type: DataTypes.STRING,
        allowNull: false
      },
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'user',
      //     key: 'id'
      //   }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'meal'
    }
);

module.exports = Meal;