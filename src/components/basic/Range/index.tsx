import React from 'react';
import { Range as ReactRange, getTrackBackground } from 'react-range';

// Styles
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

interface RangeProps {
  values: number[];
  onChange: (values: number[]) => void;
  className?: string;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
}

const Range: React.FC<RangeProps> = ({
  step = 0.1,
  min = 0,
  max = 100,
  className,
  disabled,
  values,
  onChange,
}) => (
  <div className={cx(className)}>
    <ReactRange
      disabled={disabled}
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className={cx('track', { disabled })}
          style={
            !disabled
              ? {
                  background: getTrackBackground({
                    colors: ['#5f7b7bff', '#cbdedeff'],
                    values,
                    min,
                    max,
                  }),
                }
              : {}
          }
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div {...props} key={index} className={cx('thumb', { disabled })} />
      )}
    />
  </div>
);

export default Range;
