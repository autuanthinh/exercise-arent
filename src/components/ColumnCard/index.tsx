import { FC } from 'react';
import MealCard, { MealCardExtendProps } from '../MealCard';

import './index.scss';

export type ColumnCardExtendProps = MealCardExtendProps & {
  title: string;
  tags: string[];
};

const ColumnCard: FC<ColumnCardExtendProps> = ({ imageUrl, label, title, tags }) => {
  return (
    <div className="column-card">
      <MealCard as={'div'} imageUrl={imageUrl} label={label} />
      <div className="column-card__title">{title}</div>
      <div className="column-card__tags">
        {tags.map(t => (
          <span>#{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ColumnCard;
