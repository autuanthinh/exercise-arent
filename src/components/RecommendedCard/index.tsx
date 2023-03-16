import classNames from 'classnames';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import './index.scss';

const RecommendedCard: BsPrefixRefForwardingComponent<
  'div',
  {
    title?: any;
    message?: string;
  }
> = ({ title, message, as, className, ...props }) => {
  const C = as || 'div';

  return (
    <C className={classNames('recommended-card', className)} {...props}>
      <div className="recommended-card__title">{title}</div>
      <div className="recommended-card__line" />
      <div className="recommended-card__message">{message}</div>
    </C>
  );
};

export default RecommendedCard;
