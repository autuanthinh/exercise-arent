import { Moment } from 'moment';

export const getDefaultMeals = () => ({
  morning: true,
  lunch: true,
  dinner: true,
  snack: true,
});

export type MealsMap = ReturnType<typeof getDefaultMeals>;
export type Meal = keyof MealsMap;

export type MealRecord = {
  id: number;
  imageUrl: string;
  meal: string;
  mealLabel: string;
  date: Moment;
};
