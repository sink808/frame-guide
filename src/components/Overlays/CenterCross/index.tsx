import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);

const CenterCross: React.FC = () => (
  <div className={cx('container')}>
    <div className={cx('vertical')} />
    <div className={cx('horizontal')} />
  </div>
);

export default CenterCross;
