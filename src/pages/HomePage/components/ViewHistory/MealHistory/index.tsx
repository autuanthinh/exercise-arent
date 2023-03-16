import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';

import { Col, NavLink, Row } from 'react-bootstrap';
import MealCard from 'components/MealCard';
import HighLightButton from 'components/HighLightButton';

import { MealsMap, MealRecord } from '../../../types';
import { getMealHistory } from '../../../services';

import './index.scss';

const getDefaultPagination = () => ({
  page: 1,
  limit: 8,
  pages: 0,
});

const MealHistory: FC<{
  mealMap: MealsMap;
}> = ({ mealMap }) => {
  const [pagination, setPagination] = useState(getDefaultPagination());
  const [mealHistory, setMealHistory] = useState<MealRecord[]>([]);

  const meals = useMemo(() => _.keys(_.pickBy(mealMap, v => v)), [mealMap]);

  const fetchData = useCallback(
    ({
      previousData,
      pagination,
      meals,
    }: {
      previousData: MealRecord[];
      pagination: ReturnType<typeof getDefaultPagination>;
      meals: string[];
    }) => {
      (async () => {
        const { data, ...p } = await getMealHistory({
          meals,
          limit: pagination.limit,
          page: pagination.page,
        });

        setMealHistory(previousData.concat(data));
        setPagination(p);
      })();
    },
    []
  );

  // First load
  useEffect(() => {
    fetchData({ previousData: [], pagination, meals: meals });
  }, []);

  // Reload
  useEffect(() => {
    fetchData({
      previousData: [],
      pagination: { ...pagination, page: 1 },
      meals,
    });
  }, [meals]);

  // Load more
  const loadMore = useCallback(() => {
    fetchData({
      previousData: mealHistory,
      pagination: { ...pagination, page: pagination.page + 1 },
      meals,
    });
  }, [fetchData, pagination, mealHistory, meals]);

  return (
    <div className="meal-history">
      <Row className="meal-history-list g-2">
        {mealHistory.map(({ id, imageUrl, mealLabel, date, ...props }) => {
          return (
            <Col key={id} xl={3} md={4} sm={6}>
              <MealCard
                imageUrl={imageUrl}
                label={`${date.format('MM.YY')}.${mealLabel}`}
                as={NavLink}
                to="#"
                {...props}
              />
            </Col>
          );
        })}
      </Row>
      {pagination.page < pagination.pages && (
        <Row className=" mt-4">
          <Col className="d-flex justify-content-center">
            <HighLightButton onClick={loadMore}>記録をもっと見る</HighLightButton>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default MealHistory;
