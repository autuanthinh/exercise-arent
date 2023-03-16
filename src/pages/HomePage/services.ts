import moment from 'moment';
import { MealRecord } from './types';

const images = ['d01.jpg', 'd02.jpg', 'l01.jpg', 'l02.jpg', 'l03.jpg', 'm01.jpg', 'm02.jpg', 'm03.jpg', 's01.jpg'];
const meals = [
  { key: 'morning', label: 'Morning' },
  { key: 'lunch', label: 'Lunch' },
  { key: 'dinner', label: 'Dinner' },
  { key: 'snack', label: 'Snack' },
];

const generateMealHistory: () => MealRecord[] = () => {
  const quantity = 24;
  const data = new Array(quantity).fill(null);

  return data.map((v, i) => {
    const randomImg = Math.floor(Math.random() * images.length);
    const randomMeal = Math.floor(Math.random() * meals.length);
    const meal = meals[randomMeal];
    return {
      id: i,
      imageUrl: `${process.env.PUBLIC_URL}/images/${images[randomImg]}`,
      meal: meal.key,
      mealLabel: meal.label,
      date: moment().startOf('day'),
    };
  });
};

const mealHistoryData = generateMealHistory();

function paginate<T>(array: T[], page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const getMealHistory = (data: { limit: number; page: number; meals: string[] }) => {
  const filterData = mealHistoryData.filter(m => {
    const matchedMeal = data.meals.length > 0 ? data.meals.includes(m.meal) : true;
    return matchedMeal;
  });
  const paginateData = paginate(filterData, data.limit, data.page);
  const pages = Math.ceil(filterData.length / data.limit);

  return {
    data: paginateData,
    limit: data.limit,
    page: data.page,
    pages,
  };
};
