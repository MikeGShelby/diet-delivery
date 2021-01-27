const { Meal } = require('../models');

const mealData = [
  {
    title: 'Meal Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-2.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-3.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-4.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-5.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-6.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-3.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image-8.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  },
  {
    title: 'Meal Item 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    image: 'images/meal-image.jpg',
    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere',
    calories: 200,
    fat: 8,
    protein: 8,
    total_carbohydrate: 10,
    sugars: 6,
    gf: true,
    price: 9.50
  }
];

const seedMeals = () => Meal.bulkCreate(mealData);

module.exports = seedMeals;
