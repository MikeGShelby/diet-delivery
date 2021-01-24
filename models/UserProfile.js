const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProfile extends Model {}

//table column definitions

UserProfile.init(
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false
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
