// Packages
import React from 'react';
import classNames from 'classnames/bind';

// Components
import Button from 'components/basic/Button';

// Constants
import { CROP_RATIOS } from 'constants/index';

// Types
import { CropRatio } from 'types';

// Styles
import styles from './index.scss';

const cx = classNames.bind(styles);

interface Props {
  ratio: CropRatio;
  opacity: number;
  scale: number;
  onRatioChange: (ratio: CropRatio) => void;
  onOpacityChange: (value: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<Props> = ({
  ratio,
  opacity,
  scale,
  onRatioChange,
  onOpacityChange,
  onZoomIn,
  onZoomOut,
  onReset,
}) => (
  <div className={cx('container')}>
    <div className={cx('group')}>
      <label className={cx('label')}>Crop Ratio</label>

      <select
        className={cx('select')}
        value={ratio.label}
        onChange={(event) => {
          const nextRatio =
            CROP_RATIOS.find((item) => item.label === event.target.value) ||
            CROP_RATIOS[0];

          onRatioChange(nextRatio);
        }}
      >
        {CROP_RATIOS.map((item) => (
          <option key={item.label} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>

    <div className={cx('group')}>
      <label className={cx('label')}>Overlay Opacity</label>

      <input
        className={cx('slider')}
        type="range"
        min={0.2}
        max={1}
        step={0.1}
        value={opacity}
        onChange={(event) => onOpacityChange(Number(event.target.value))}
      />
    </div>

    <div className={cx('group')}>
      <label className={cx('label')}>Zoom</label>

      <div className={cx('actions')}>
        <Button theme="primary" onClick={onZoomOut}>
          -
        </Button>
        <Button theme="primary" onClick={onZoomIn}>
          +
        </Button>
        <Button theme="secondary" onClick={onReset}>
          Reset
        </Button>

        <span className={cx('scale')}>{(scale * 100).toFixed(0)}%</span>
      </div>
    </div>
  </div>
);

export default ControlPanel;
