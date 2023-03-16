import { Moment } from 'moment';

export type DiaryRecordType = {
  id: number;
  date: Moment;
  note: string;
};
