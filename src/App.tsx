import React, { useState } from 'react';
import { CROP_RATIOS } from 'constants/index';

// Hooks
import useImageUpload from 'hooks/useImageUpload';
import usePanZoom from 'hooks/usePanZoom';

// Components
import UploadArea from 'components/UploadArea';
import Stage from 'components/Stage';
import ControlPanel from 'components/ControlPanel';

// Styles
import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

const App: React.FC = () => {
  const { image, uploadImage, removeImage } = useImageUpload();
  const { scale, position, setPosition, zoomIn, zoomOut, reset } = usePanZoom();
  const [ratio, setRatio] = useState(CROP_RATIOS[0]);
  const [opacity, setOpacity] = useState(1);

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h1 className={cx('title')}>Frame Guide</h1>

        <p className={cx('subtitle')}>Image Crop Ratio Preview Tool</p>
      </div>

      <div className={cx('workspace')}>
        <UploadArea image={image} onUpload={uploadImage} onRemove={removeImage} />

        <Stage
          image={image}
          ratio={ratio}
          opacity={opacity}
          scale={scale}
          position={position}
          setPosition={setPosition}
        />
        {image && (
          <ControlPanel
            ratio={ratio}
            opacity={opacity}
            scale={scale}
            onRatioChange={setRatio}
            onOpacityChange={setOpacity}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={reset}
          />
        )}
      </div>
    </div>
  );
};

export default App;
