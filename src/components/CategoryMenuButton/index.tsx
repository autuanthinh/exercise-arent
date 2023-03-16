import classNames from 'classnames';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import './index.scss';

const CategoryMenuButton: BsPrefixRefForwardingComponent<
  'div',
  {
    icon: any;
    label: any;
  }
> = ({ icon, label, as, className, ...props }) => {
  const C = as || 'div';
  return (
    <C className={classNames('category-menu-button', className)} {...props}>
      <span className="category-menu-button--icon">{icon}</span>
      <span className="category-menu-button--label">{label}</span>
    </C>
  );
};

export default CategoryMenuButton;
