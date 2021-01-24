const { User } = require('../models');

const userData = [
  {
    username: 'Username1',
    email: 'email1@email.com',
    password: 'password1'
  },
  {
    username: 'Username2',
    email: 'email2@email.com',
    password: 'password2'
  },
  {
    username: 'Username3',
    email: 'email3@email.com',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
