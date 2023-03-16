import classNames from 'classnames';
import { CSSProperties } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import './index.scss';

export type MealCardExtendProps = {
  imageUrl?: string;
  label?: any;
};

const MealCard: BsPrefixRefForwardingComponent<'div', MealCardExtendProps> = ({
  imageUrl,
  label,
  as,
  className,
  ...props
}) => {
  const C = as || 'div';

  const style: CSSProperties = imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {};

  return (
    <C className={classNames('meal-card', className)} style={{ ...style }} {...props}>
      {label && <span className="meal-card-label">{label}</span>}
    </C>
  );
};

export default MealCard;
