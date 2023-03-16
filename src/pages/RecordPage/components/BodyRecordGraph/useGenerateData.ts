import moment from 'moment';
import { RawDataType } from './types';
import { useMemo } from 'react';

function random(num: number) {
  return Math.floor(Math.random() * num) + 1;
}

function randomSign(num: number) {
  const sign = random(10) % 2 === 0 ? 1 : -1;
  return (sign * (Math.floor(Math.random() * num) + 1)) / 10;
}

export function useGenerateData() {
  const data = useMemo(() => {
    const data: RawDataType[] = [];

    // const currentMonth = moment().startOf('day').startOf('year');
    const currentMonth = moment().startOf('day').startOf('month').month(6);
    const arrayDates = new Array(365).fill(0).map((v, i) => currentMonth.clone().add(i, 'day'));
    const arrayCategories = ['weight', 'fat'];

    let weight = 40 + random(70);
    let fat = weight + randomSign(2);

    arrayDates.forEach(date => {
      return arrayCategories.forEach(category => {
        if (category === 'weight') {
          weight += randomSign(10);
          fat = weight + randomSign(100);
        }
        data.push({
          date,
          category,
          value: category === 'weight' ? weight : fat,
        });
      });
    });

    return data;
  }, []);

  return data;
}
