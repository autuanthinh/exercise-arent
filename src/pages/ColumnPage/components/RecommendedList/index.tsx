import { FC, useMemo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import RecommendedCard from 'components/RecommendedCard';

import './index.scss';

const RecommendedList: FC<{}> = ({}) => {
  const buttons = useMemo(() => {
    return [
      {
        key: 'recommended-column',
        title: 'RECOMMENDED<br />COLUMN',
        message: 'オススメ',
      },
      {
        key: 'recommended-diet',
        title: 'RECOMMENDED<br />DIET',
        message: 'ダイエット',
      },
      {
        key: 'recommended-beauty',
        title: 'RECOMMENDED<br />BEAUTY',
        message: '美容',
      },
      {
        key: 'recommended-healthy',
        title: 'RECOMMENDED<br />HEALTH',
        message: '健康',
      },
    ];
  }, []);

  return (
    <Container className="list-recommended-card">
      <Row className="g-2 justify-content-center">
        {buttons.map(({ key, title, ...props }) => {
          return (
            <Col key={key} xs={12} sm={6} md={6} xl={3}>
              <RecommendedCard title={<div dangerouslySetInnerHTML={{ __html: title }} {...props} />} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default RecommendedList;
