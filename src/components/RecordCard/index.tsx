import classNames from 'classnames';
import { CSSProperties } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import './index.scss';

const BasicMealCard: BsPrefixRefForwardingComponent<
  'button',
  {
    imageUrl?: string;
    title?: string;
    actionLabel?: string;
  }
> = ({ imageUrl, actionLabel, title, as, className, ...props }) => {
  const C = as || 'button';

  const styleImage: CSSProperties = imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {};

  return (
    <div className={classNames('record-card', className)}>
      <div className="record-card-tmp">
        <div className="record-card-wrap">
          <div className="record-card-bg" style={styleImage} />
          <div className="record-card-content">
            <div className="record-card-title">{title}</div>
            <C className="record-card-button" {...props}>
              {actionLabel}
            </C>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicMealCard;
