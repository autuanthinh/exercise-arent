import React, { FC } from 'react';

import ProcessCircle from 'components/ProcessCircle';

import './index.scss';

const DateAchievementRate: FC<{}> = () => {
  return (
    <div className="date-achievement-rate">
      <ProcessCircle
        size={181}
        progress={75}
        trackWidth={5}
        indicatorWidth={4}
        trackColor="unset"
        indicatorColor="white"
        renderLabel={p => (
          <span>
            <span style={{ fontSize: '1.125rem' }}>05/21</span>
            <span style={{ fontSize: '1.562rem' }}>{p}%</span>
          </span>
        )}
      />
    </div>
  );
};

export default DateAchievementRate;
