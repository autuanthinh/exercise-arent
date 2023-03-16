import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import RecommendedList from './components/RecommendedList';
import ColumnHistory from './components/ColumnHistory';

import './index.scss';

function ColumnPage() {
  return (
    <div className="record-page">
      <RecommendedList />
      <Container>
        <Row>
          <Col>
            <ColumnHistory />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ColumnPage;
