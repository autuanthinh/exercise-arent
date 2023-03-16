import { FC, useCallback, useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import HighLightButton from 'components/HighLightButton';
import DiaryCard from './DiaryCard';

import { DiaryRecordType } from '../../types';
import { getDiary } from '../../services';

import './index.scss';

const getDefaultPagination = () => ({
  page: 1,
  limit: 8,
  pages: 0,
});

const MyDiary: FC<{}> = ({}) => {
  const [pagination, setPagination] = useState(getDefaultPagination());
  const [diaryData, setDiaryData] = useState<DiaryRecordType[]>([]);

  const fetchData = useCallback(
    ({
      previousData,
      pagination,
    }: {
      previousData: DiaryRecordType[];
      pagination: ReturnType<typeof getDefaultPagination>;
    }) => {
      (async () => {
        const { data, ...p } = await getDiary({
          limit: pagination.limit,
          page: pagination.page,
        });

        setDiaryData(previousData.concat(data));
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
      previousData: diaryData,
      pagination: { ...pagination, page: pagination.page + 1 },
    });
  }, [fetchData, pagination, diaryData]);

  return (
    <div className="my-diary">
      <Row>
        <Col className="my-diary-title">MY DIARY</Col>
      </Row>
      <Row className="my-diary-list g-3">
        {diaryData.map(d => {
          return (
            <Col key={d.id} xl={3} md={4} sm={6}>
              <DiaryCard {...d} />
            </Col>
          );
        })}
      </Row>
      {pagination.page < pagination.pages && (
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <HighLightButton onClick={loadMore}>記録をもっと見る</HighLightButton>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default MyDiary;
