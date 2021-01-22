const User = require('./User');
const Meal = require('./Meal');
const Vote = require('./Vote');
const Comment = require('./Comment');

// User/Post associations
User.hasMany(Meal, {
    foreignKey: 'user_id'
});

Meal.belongsTo(User, {
    foreignKey: 'user_id',
});

// Vote associations
User.belongsToMany(Meal, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Meal.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Meal, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Meal.hasMany(Vote, {
    foreignKey: 'post_id'
});

// Comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Meal, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Meal.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Meal, Vote, Comment };