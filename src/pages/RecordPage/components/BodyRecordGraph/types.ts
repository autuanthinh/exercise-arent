import { Moment } from 'moment';

export type DateType = 'day' | 'week' | 'month' | 'year';

export type RawDataType = {
  date: Moment;
  category: string;
  value: number;
};
export type DataType = {
  date: Moment;
  dateString: string;
  key: string;
  category: string;
  value: number;
};
