import { FC } from 'react';

import './index.scss';

const ProcessCircle: FC<{
  size?: number;
  progress?: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: React.SVGAttributes<SVGCircleElement>['strokeLinecap'];
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
  renderLabel?: (process: number) => any;
}> = ({
  size = 150,
  progress = 0,
  trackWidth = 10,
  trackColor = `#ddd`,
  indicatorWidth = 10,
  indicatorColor = `#07c`,
  indicatorCap = `round`,
  spinnerMode = false,
  labelColor = 'inhirited',
  spinnerSpeed = 1,
  renderLabel = p => <span className="process-circle-label__progress">{`${p}%`}</span>,
}) => {
  const fixedProgress = progress > 100 ? 100 : progress;
  const center = size / 2;
  const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - fixedProgress) / 100);

  return (
    <div className="process-circle-wrapper" style={{ width: size, height: size }}>
      <svg className="process-circle" style={{ width: size, height: size }}>
        <circle
          className="process-circle-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          className={`process-circle-indicator ${spinnerMode ? 'process-circle-indicator--spinner' : ''}`}
          style={{ animationDuration: `${spinnerSpeed * 1000}s` }}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>

      {renderLabel && (
        <div className="process-circle-label" style={{ color: labelColor }}>
          {renderLabel(fixedProgress)}
        </div>
      )}
    </div>
  );
};

export default ProcessCircle;
