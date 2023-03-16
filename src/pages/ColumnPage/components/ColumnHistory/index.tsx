import { FC, useCallback, useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import ColumnCard from 'components/ColumnCard';
import HighLightButton from 'components/HighLightButton';

import { ColumRecord } from '../../types';
import { getColumnRecords } from '../../services';

import './index.scss';

const getDefaultPagination = () => ({
  page: 1,
  limit: 8,
  pages: 0,
});

const ColumnHistory: FC<{}> = ({}) => {
  const [pagination, setPagination] = useState(getDefaultPagination());
  const [columnHistory, setColumnHistory] = useState<ColumRecord[]>([]);

  const fetchData = useCallback(
    ({
      previousData,
      pagination,
    }: {
      previousData: ColumRecord[];
      pagination: ReturnType<typeof getDefaultPagination>;
    }) => {
      (async () => {
        const { data, ...p } = await getColumnRecords({
          limit: pagination.limit,
          page: pagination.page,
        });

        setColumnHistory(previousData.concat(data));
        setPagination(p);
      })();
    },
    []
  );

  // First load
  useEffect(() => {
    fetchData({ previousData: [], pagination });
  }, []);

  // Reload
  useEffect(() => {
    fetchData({
      previousData: [],
      pagination: { ...pagination, page: 1 },
    });
  }, []);

  // Load more
  const loadMore = useCallback(() => {
    fetchData({
      previousData: columnHistory,
      pagination: { ...pagination, page: pagination.page + 1 },
    });
  }, [fetchData, pagination, columnHistory]);

  return (
    <div className="column-history">
      <Row className="column-history-list gx-2 gy-2">
        {columnHistory.map(({ id, date, ...props }) => {
          return (
            <Col key={id} xl={3} md={4} sm={6}>
              <ColumnCard label={date.format('YYYY.MM.DD HH:mm')} {...props} />
            </Col>
          );
        })}
      </Row>
      {pagination.page < pagination.pages && (
        <Row className=" mt-4">
          <Col className="d-flex justify-content-center">
            <HighLightButton onClick={loadMore}>コラムをもっと見る</HighLightButton>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ColumnHistory;
