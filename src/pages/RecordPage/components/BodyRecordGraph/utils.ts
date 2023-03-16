import { LineConfig } from '@ant-design/charts';
import moment, { Moment } from 'moment';
import { DateType, RawDataType, DataType } from './types';

export const formatDateStick = (text: string, dateType: DateType) => {
  const date = moment(text, 'YYYY/MM/DD');
  switch (dateType) {
    case 'day': {
      return `${date.format('M')}月`;
    }
    case 'week': {
      return `${date.format('w')}週`;
    }
    case 'month': {
      return `${date.format('M')}月`;
    }
    case 'year': {
      return `${date.format('YYYY')}月`;
    }
    default:
      return '';
  }
};

export const formatDateString = (date: Moment, dateType: DateType) => {
  return date.format('YYYY/MM/DD');
};

export const calculateDataByDateType = (data: RawDataType[], dateType: DateType) => {
  const newData: DataType[] = data
    .filter(d => d.date.valueOf() === d.date.clone().startOf(dateType).valueOf())
    .map(d => {
      const dateString = formatDateString(d.date, dateType);
      return {
        ...d,
        dateString,
        key: `${dateString}|${d.category}`,
      };
    });
  return newData;
};

export const getChartConfig = (dateType: DateType) => {
  let defaultConfig: LineConfig = {
    data: [],
    yAxis: false,
    xAxis: {
      tickCount: 12,
      line: null,
    },
    point: {
      size: 4,
      shape: 'circle',
    },
    legend: false,
  };

  switch (dateType) {
    case 'day':
      defaultConfig = {
        ...defaultConfig,
        point: undefined,
        xAxis: {
          ...(defaultConfig.xAxis || {}),
          tickCount: 12,
        },
      };
      break;
    case 'week':
      defaultConfig = {
        ...defaultConfig,
        point: undefined,
        xAxis: {
          ...(defaultConfig.xAxis || {}),
          tickCount: 53,
        },
      };
      break;
    case 'month':
      defaultConfig = {
        ...defaultConfig,
        point: {
          size: 4,
          shape: 'circle',
        },
        xAxis: {
          ...(defaultConfig.xAxis || {}),
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
        },
      };
      break;
    case 'year':
      defaultConfig = {
        ...defaultConfig,
        point: {
          size: 4,
          shape: 'circle',
        },
        xAxis: {
          ...(defaultConfig.xAxis || {}),
          line: null,
          tickCount: 2,
          grid: {
            line: {
              style: {
                stroke: '#DDDDDD',
                cursor: 'pointer',
              },
            },
          },
        },
      };
      break;
  }

  return defaultConfig;
};
