import { FC, useMemo } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { DateType, RawDataType, DataType } from './types';
import * as Utils from './utils';

import './index.scss';

const Chart: FC<{
  data: RawDataType[];
  dateType: DateType;
}> = ({ data, dateType }) => {
  const fixedData = useMemo(() => {
    const calculateData = Utils.calculateDataByDateType(data, dateType);
    const dataMap = calculateData.reduce((o, n) => {
      o[`${n.dateString}|${n.category}`] = n;
      return o;
    }, {} as { [k: string]: DataType });

    return {
      data: calculateData,
      dataMap: dataMap,
    };
  }, [data, dateType]);

  console.log(fixedData);

  const config = useMemo(() => Utils.getChartConfig(dateType), [dateType]);

  const configFixed: LineConfig = {
    ...config,
    data: fixedData.data,
    xField: 'dateString',
    yField: 'value',
    seriesField: 'category',
    color: ['#FFCC21', '#8FE9D0'],
    yAxis: false,
    xAxis: {
      ...config.xAxis,
      label: {
        formatter: v => {
          return Utils.formatDateStick(v, dateType);
        },
      },
    },
  };

  return <Line {...configFixed} />;
};

export default Chart;
