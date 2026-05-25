import React from 'react';

// Hooks
import useDrag from 'hooks/useDrag';

// Types
import { UploadedImage, CropRatio, Position } from 'types';

// Components
import OverlayLayer from 'components/Overlays/OverlayLayer';

// Styles
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

interface Props {
  image: UploadedImage | null;
  ratio: CropRatio;
  opacity: number;
  scale: number;
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

const Stage: React.FC<Props> = ({
  image,
  ratio,
  opacity,
  scale,
  position,
  setPosition,
}) => {
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
        <img src={image.url} alt="stage" className={cx('image')} draggable={false} />
      </div>

      <OverlayLayer ratio={ratio} opacity={opacity} />
    </div>
  );
};

export default Stage;
