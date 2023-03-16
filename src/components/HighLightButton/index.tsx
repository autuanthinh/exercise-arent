import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import './index.scss';

const HighLightButton: BsPrefixRefForwardingComponent<'button', {}> = ({ as, children, ...props }) => {
  const C = as || 'button';

  return (
    <C className="high-light-button" {...props}>
      {children}
    </C>
  );
};

export default HighLightButton;
