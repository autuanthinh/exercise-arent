import moment from 'moment';
import { DiaryRecordType } from './types';

const generateDiary: () => DiaryRecordType[] = () => {
  const quantity = 24;
  const data = new Array(quantity).fill(null);

  return data.map((v, i) => {
    return {
      id: i,
      date: moment(),
      note: `私の日記の記録が一部表示されます<br /><br />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      `,
    };
  });
};

const diaryData = generateDiary();

function paginate<T>(array: T[], page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const getDiary = (data: { limit: number; page: number }) => {
  const paginateData = paginate(diaryData, data.limit, data.page);
  const pages = Math.ceil(diaryData.length / data.limit);

  return {
    data: paginateData,
    limit: data.limit,
    page: data.page,
    pages,
  };
};
