import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import ListRecordCard from './components/ListRecordCard';
import BodyRecordGraph from './components/BodyRecordGraph';
import MyExercise from './components/MyExercise';
import MyDiary from './components/MyDiary';

import './index.scss';

function RecordPage() {
  return (
    <div className="record-page">
      <ListRecordCard />
      <Container>
        <Row>
          <Col>
            <BodyRecordGraph />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <MyExercise />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <MyDiary />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RecordPage;
