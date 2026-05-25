import React from 'react';

// Hooks
import useImageUpload from 'hooks/useImageUpload';

// Components
import UploadArea from 'components/UploadArea';
import Stage from 'components/Stage';

// Styles
import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

const App: React.FC = () => {
  const { image, uploadImage, removeImage } = useImageUpload();

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h1 className={cx('title')}>Frame Guide</h1>

        <p className={cx('subtitle')}>Image Crop Ratio Preview Tool</p>
      </div>

      <div className={cx('workspace')}>
        <UploadArea image={image} onUpload={uploadImage} onRemove={removeImage} />
        <Stage image={image} />
      </div>
    </div>
  );
};

export default App;
