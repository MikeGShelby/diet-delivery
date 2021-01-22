const { Meal } = require('../models');

const mealData = [
  {
    title: 'Meal Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  },
  {
    title: 'Meal Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  },
  {
    title: 'Meal Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  },
  {
    title: 'Meal Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  },
  {
    title: 'Meal Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  },
  {
    title: 'Meal Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg'
  }
];

const seedMeals = () => Meal.bulkCreate(mealData);

module.exports = seedMeals;
