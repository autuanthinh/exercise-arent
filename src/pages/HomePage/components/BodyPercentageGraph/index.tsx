import { FC, useMemo } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import moment, { Moment } from 'moment';

import './index.scss';

const BodyPercentageGraph: FC<{}> = () => {
  const data = useMemo(() => {
    const data: {
      date: Moment;
      dateString: string;
      category: string;
      value: number;
    }[] = [];

    const currentDate = moment().date(6).startOf('date');
    const arrayDates = new Array(12).fill(0).map((v, i) => currentDate.clone().add(i, 'month'));
    const arrayCategories = ['weight', 'fat'];
    arrayDates.forEach(date => {
      return arrayCategories.forEach(category => {
        data.push({
          date,
          dateString: date.format('YYYY/MM/DD'),
          category,
          value: Math.floor(Math.random() * 100) + 1,
        });
      });
    });

    return data;
  }, []);

  const config: LineConfig = {
    data,
    xField: 'dateString',
    yField: 'value',
    seriesField: 'category',
    color: ['#FFCC21', '#8FE9D0'],
    yAxis: false,
    xAxis: {
      line: null,
      tickCount: 12,
      grid: {
        line: {
          style: {
            stroke: '#DDDDDD',
            cursor: 'pointer',
          },
        },
      },
      label: {
        formatter: v => {
          return `${moment(v, 'YYYY/MM/DD').format('M')}月`;
        },
      },
    },
    point: {
      size: 4,
      shape: 'circle',
    },
    legend: false,
  };

  return (
    <div className="body-percentage-graph">
      <div className="line-wrapper">
        <Line {...config} />
      </div>
    </div>
  );
};

export default BodyPercentageGraph;
