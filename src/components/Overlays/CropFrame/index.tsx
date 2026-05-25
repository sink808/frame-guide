import React, { useMemo } from 'react';
import classNames from 'classnames/bind';

import { CropRatio } from 'types';

import styles from './index.scss';

const cx = classNames.bind(styles);

interface Props {
  ratio: CropRatio;
}

const CropFrame: React.FC<Props> = ({ ratio }) => {
  const { width, height } = ratio;

  const frameSize = useMemo(() => {
    const cropRatio = width / height;
    const DEFAULT_SIZE = 80;

    if (cropRatio > 1) {
      return {
        width: `${DEFAULT_SIZE}%`,
        height: `${DEFAULT_SIZE / cropRatio}%`,
      };
    }

    if (cropRatio < 1) {
      return {
        width: `${DEFAULT_SIZE * cropRatio}%`,
        height: `${DEFAULT_SIZE}%`,
      };
    }

    return {
      width: `${DEFAULT_SIZE}%`,
      height: `${DEFAULT_SIZE}%`,
    };
  }, [width, height]);

  return (
    <div className={cx('container')}>
      <div className={cx('frame')} style={frameSize} />
    </div>
  );
};

export default CropFrame;
