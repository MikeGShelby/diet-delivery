const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProfile extends Model {}

//table column definitions

UserProfile.init(
    {
        display_name: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        street_address: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,

        },
        state: {
            type: DataTypes.STRING,

        },
        zip_code: {
            type: DataTypes.INTEGER,

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        onDelete: 'CASCADE'
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_profile'
      }
);

module.exports = UserProfile;
