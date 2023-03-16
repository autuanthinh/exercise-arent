import { FC, useMemo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import RecordCard from 'components/RecordCard';

import './index.scss';

const ListRecordCard: FC<{}> = ({}) => {
  const buttons = useMemo(() => {
    return [
      {
        key: 'body-record',
        title: 'BODY RECORD',
        actionLabel: '自分のカラダの記録',
        imageUrl: '/images/MyRecommend-1.jpg',
        onClick: () => {},
      },
      {
        key: 'my-exercise',
        title: 'MY EXERCISE',
        actionLabel: '自分の運動の記録',
        imageUrl: '/images/MyRecommend-2.jpg',
        onClick: () => {},
      },
      {
        key: 'my-diary',
        title: 'MY DIARY',
        actionLabel: '自分の日記',
        imageUrl: '/images/MyRecommend-3.jpg',
        onClick: () => {},
      },
    ];
  }, []);

  return (
    <Container className="list-record-card">
      <Row className="g-4 g-md-5 justify-content-center">
        {buttons.map(({ key, ...props }) => {
          return (
            <Col key={key} xs={8} sm={8} md={6} lg={4}>
              <RecordCard className={`record-${key}`} {...props} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListRecordCard;
