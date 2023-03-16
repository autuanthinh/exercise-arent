import { FC, useMemo } from 'react';
import classNames from 'classnames';

import CategoryMenuButton from 'components/CategoryMenuButton';
import { MealsMap, Meal } from '../../../types';

import Knife from 'assets/icons/knife.png';
import Cup from 'assets/icons/cup.png';

import './index.scss';

const ListCategoryMenu: FC<{
  toggleMeal: (meal: Meal) => void;
  mealMap: MealsMap;
}> = ({ toggleMeal, mealMap }) => {
  const buttons = useMemo(() => {
    return [
      {
        icon: <img src={Knife} alt="Knife" />,
        label: 'Morning',
        active: mealMap['morning'],
        onClick: () => toggleMeal('morning'),
      },
      {
        icon: <img src={Knife} alt="Knife" />,
        label: 'Lunch',
        active: mealMap['lunch'],
        onClick: () => toggleMeal('lunch'),
      },
      {
        icon: <img src={Knife} alt="Knife" />,
        label: 'Dinner',
        active: mealMap['dinner'],
        onClick: () => toggleMeal('dinner'),
      },
      {
        icon: <img src={Cup} alt="Cup" />,
        label: 'Snack',
        active: mealMap['snack'],
        onClick: () => toggleMeal('snack'),
      },
    ];
  }, [mealMap, toggleMeal]);
  return (
    <div className="list-category-menu">
      {buttons.map(({ active, ...props }) => {
        return <CategoryMenuButton key={props.label} className={classNames({ active })} {...props} />;
      })}
    </div>
  );
};

export default ListCategoryMenu;
