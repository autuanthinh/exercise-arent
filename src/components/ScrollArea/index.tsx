import { FC, ComponentProps } from 'react';
import ScrollBar from 'react-scrollbar';

import './index.scss';

type ScrollAreaProps = ComponentProps<typeof ScrollBar>;

const ScrollArea: FC<ScrollAreaProps> = ({ minScrollSize = 35, ...props }) => {
  const fixedProps = {
    smoothScrolling: true,
    minScrollSize: 35,
    ...props,
  };

  return <ScrollBar {...fixedProps} />;
};

export default ScrollArea;
