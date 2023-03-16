import { FC, PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
import { useGenerateData } from './useGenerateData';
import { DateType } from './types';

import Chart from './Chart';

import './index.scss';

const DateButton: FC<
  PropsWithChildren & {
    active: boolean;
    onClick: () => void;
  }
> = ({ onClick, active, children }) => {
  return (
    <button className={classNames('date-btn', { active })} onClick={onClick}>
      {children}
    </button>
  );
};

const BodyRecordGraph: FC<{}> = () => {
  const data = useGenerateData();
  const [dateType, setDateType] = useState<DateType>('month');

  return (
    <div className="body-record-graph">
      <div className="title">
        <div className="title__label">
          BODY <br /> RECORD
        </div>
        <div className="title__date">2021.05.21</div>
      </div>
      <div className="line-wrapper">
        <Chart data={data} dateType={dateType} />
      </div>
      <div className="date-btn-list">
        <DateButton onClick={() => setDateType('day')} active={dateType === 'day'}>
          日
        </DateButton>
        <DateButton onClick={() => setDateType('week')} active={dateType === 'week'}>
          週
        </DateButton>
        <DateButton onClick={() => setDateType('month')} active={dateType === 'month'}>
          月
        </DateButton>
        <DateButton onClick={() => setDateType('year')} active={dateType === 'year'}>
          年
        </DateButton>
      </div>
    </div>
  );
};

export default BodyRecordGraph;
