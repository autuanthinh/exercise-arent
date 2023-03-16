import { Moment } from 'moment';
import { FC } from 'react';

import './index.scss';

const DiaryCard: FC<{
  date: Moment;
  note: string;
}> = ({ date, note }) => {
  return (
    <div className="diary-card">
      <div className="diary-card__date">{date.format('YYYY.MM.DD')}</div>
      <div className="diary-card__time">{date.format('HH:mm')}</div>
      <div className="diary-card__note" dangerouslySetInnerHTML={{ __html: note }} />
    </div>
  );
};

export default DiaryCard;
