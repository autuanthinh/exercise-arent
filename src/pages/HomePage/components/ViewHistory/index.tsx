import { FC, useCallback, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import ListCategoryMenu from './ListCategoryMenu';
import MealHistory from './MealHistory';

import { getDefaultMeals, Meal } from '../../types';

const ViewHistory: FC<{}> = () => {
  const [mealMap, setMealMap] = useState(getDefaultMeals());

  const toggleMeal = useCallback(
    (meal: Meal) => {
      mealMap[meal] = !mealMap[meal];
      setMealMap({ ...mealMap });
    },
    [mealMap]
  );

  return (
    <Container>
      <Row>
        <Col>
          <ListCategoryMenu toggleMeal={toggleMeal} mealMap={mealMap} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MealHistory mealMap={mealMap} />
        </Col>
      </Row>
    </Container>
  );
};

export default ViewHistory;
