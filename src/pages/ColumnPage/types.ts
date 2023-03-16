import { Moment } from 'moment';

export type ColumRecord = {
  id: number;
  imageUrl: string;
  date: Moment;
  title: string;
  tags: string[];
};
