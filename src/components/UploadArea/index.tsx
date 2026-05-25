import React, { ChangeEvent, DragEvent, useRef, useState } from 'react';

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
  onUpload: (file: File | null) => void;
  onRemove: () => void;
}

const UploadArea: React.FC<Props> = ({ image, onUpload, onRemove }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    onUpload(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0] || null;

    onUpload(file);
  };

  return (
    <div className={cx('container')}>
      {!image && (
        <div
          className={cx('dropzone', {
            dragging: isDragging,
          })}
          onClick={handleBrowse}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className={cx('title')}>Drag image here</p>
          <p className={cx('subtitle')}>or click to upload</p>
        </div>
      )}

      {image && (
        <div className={cx('preview')}>
          <div className={cx('image-container')}>
            <img src={image.url} alt="preview" className={cx('image')} />
          </div>

          <div className={cx('actions')}>
            <Button theme="primary" onClick={handleBrowse}>
              Replace
            </Button>

            <Button theme="danger" onClick={onRemove}>
              Remove
            </Button>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadArea;
