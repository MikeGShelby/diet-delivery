const { User } = require('../models');

const userData = [
  {
    email: 'email1@email.com',
    password: 'password1'
  },
  {
    email: 'email2@email.com',
    password: 'password2'
  },
  {
    email: 'email3@email.com',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
