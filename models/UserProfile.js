const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProfile extends Model {}

//table column definitions

UserProfile.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        streetAddress: {
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
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            } 
        } 
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
      }
);

module.exports = UserProfile;
