/// <reference types="react-scripts" />

declare module 'react-notification-badge' {
  export const Effect: {
    ROTATE_X: any;
    ROTATE_Y: any;
    SCALE: any;
  };

  export default FC<{
    count: number;
    label: string;
    containerStyle: CSSProperties | undefined;
    style: CSSProperties | undefined;
    className: string;
    effect: any;
    duration: number;
  }>;
}
