// Packages
import React from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './index.scss';

const cx = classNames.bind(styles);

const ThirdsGrid: React.FC = () => (
  <div className={cx('container')}>
    <div className={cx('v1')} />
    <div className={cx('v2')} />
    <div className={cx('h1')} />
    <div className={cx('h2')} />
  </div>
);

export default ThirdsGrid;
