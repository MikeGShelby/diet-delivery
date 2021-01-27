const { Meal } = require('../models');

const mealData = [
  {
    title: 'Meal Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    price: '15'
  },
  {
    title: 'Meal Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-2.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-3.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-4.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-5.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-6.jpg',
    price: '17'
  },

  {
    title: 'Meal Item 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-3.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-8.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-2.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 11',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-3.jpg',
    price: '17'
  },
  {
    title: 'Meal Item 12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-4.jpg',
    price: '17'
  }
];

const seedMeals = () => Meal.bulkCreate(mealData);

module.exports = seedMeals;
