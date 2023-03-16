import { FC, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';

import './index.scss';

type ExerciseRecordType = {
  title: string;
  time: {
    count: number;
    type: string;
  };
  kcal: number;
};

const ExerciseRecord: FC<{
  record: ExerciseRecordType;
}> = ({ record }) => {
  return (
    <div className="exercise-record">
      <div className="record-info">
        <div className="record-info__title">{record.title}</div>
        <div className="record-info__kcal">{record.kcal}kcal</div>
      </div>
      <div className="record-duration">
        {record.time.count} {record.time.type}
      </div>
    </div>
  );
};

const ExerciseRecordList: FC<{ data: ExerciseRecordType[] }> = ({ data }) => {
  return (
    <div className="exercise-record-list">
      <div>
        <Row>
          {data.map((r, i) => {
            return (
              <Col key={i} sm={6}>
                <ExerciseRecord record={r} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

const MyExercise: FC<{}> = () => {
  const data = useMemo(() => {
    return new Array(20).fill(null).map(() => ({
      title: '家事全般（立位・軽い',
      time: {
        count: 10,
        type: 'min',
      },
      kcal: 26,
    }));
  }, []);

  return (
    <div className="my-exercise">
      <div className="title">
        <div className="title__label">
          BODY <br /> RECORD
        </div>
        <div className="title__date">2021.05.21</div>
      </div>
      <ExerciseRecordList data={data} />
    </div>
  );
};

export default MyExercise;
