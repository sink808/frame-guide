import React from 'react';
import classNames from 'classnames/bind';

import { CropRatio } from 'types';

import ThirdsGrid from '../ThirdsGrid';
import CenterCross from '../CenterCross';
import CropFrame from '../CropFrame';

import styles from './index.scss';

const cx = classNames.bind(styles);

interface Props {
  ratio: CropRatio;
  opacity: number;
}

const OverlayLayer: React.FC<Props> = ({ ratio, opacity }) => (
  <div className={cx('container')} style={{ opacity }}>
    <ThirdsGrid />
    <CenterCross />
    <CropFrame ratio={ratio} />
  </div>
);

export default OverlayLayer;
