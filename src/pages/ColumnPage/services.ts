import moment from 'moment';
import { ColumRecord } from './types';

const images = [
  'column-1.jpg',
  'column-2.jpg',
  'column-3.jpg',
  'column-4.jpg',
  'column-5.jpg',
  'column-6.jpg',
  'column-7.jpg',
  'column-8.jpg',
];

const generateColumnRecordData: () => ColumRecord[] = () => {
  const quantity = 24;
  const data = new Array(quantity).fill(null);

  return data.map((v, i) => {
    const randomImg = Math.floor(Math.random() * images.length);
    return {
      id: i,
      imageUrl: `${process.env.PUBLIC_URL}/images/${images[randomImg]}`,
      date: moment().startOf('day'),
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
      tags: ['魚料理', '和食', 'DHA'],
    };
  });
};

const columnRecordData = generateColumnRecordData();

function paginate<T>(array: T[], page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const getColumnRecords = (data: { limit: number; page: number }) => {
  const paginateData = paginate(columnRecordData, data.limit, data.page);
  const pages = Math.ceil(columnRecordData.length / data.limit);

  return {
    data: paginateData,
    limit: data.limit,
    page: data.page,
    pages,
  };
};
