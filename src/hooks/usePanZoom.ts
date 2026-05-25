import { useCallback, useState } from 'react';

import {
  DEFAULT_POSITION,
  DEFAULT_SCALE,
  MAX_SCALE,
  MIN_SCALE,
  SCALE_STEP,
} from 'constants/index';

const usePanZoom = () => {
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const [position, setPosition] = useState(DEFAULT_POSITION);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + SCALE_STEP, MAX_SCALE));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - SCALE_STEP, MIN_SCALE));
  }, []);

  const reset = useCallback(() => {
    setScale(DEFAULT_SCALE);
    setPosition(DEFAULT_POSITION);
  }, []);

  return {
    scale,
    position,
    setPosition,
    zoomIn,
    zoomOut,
    reset,
  };
};

export default usePanZoom;
