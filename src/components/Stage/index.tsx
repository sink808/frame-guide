import React from 'react';

// Hooks
import useDrag from 'hooks/useDrag';
import usePanZoom from 'hooks/usePanZoom';

// Types
import { UploadedImage } from 'types';

// Components
import Button from 'components/basic/Button';

// Styles
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

interface Props {
  image: UploadedImage | null;
}

const Stage: React.FC<Props> = ({ image }) => {
  const { scale, position, setPosition, zoomIn, zoomOut, reset } = usePanZoom();

  const {
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useDrag({
    position,
    setPosition,
  });

  if (!image) {
    return null;
  }

  return (
    <div className={cx('container')}>
      <div
        className={cx('stage', {
          dragging: isDragging,
        })}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cx('transform')}
          style={{
            transform: `
              translate(
                ${position.x}px,
                ${position.y}px
              )
              scale(${scale})
            `,
          }}
        >
          <img
            src={image.url}
            alt="stage"
            className={cx('image')}
            draggable={false}
          />
        </div>
      </div>
      <div className={cx('toolbar')}>
        <Button theme="primary" onClick={zoomOut}>
          -
        </Button>
        <Button theme="primary" onClick={zoomIn}>
          +
        </Button>

        <Button theme="secondary" onClick={reset}>
          Reset
        </Button>

        <span className={cx('scale')}>{(scale * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
};

export default Stage;
