import { CropRatio } from 'types';

export const DEFAULT_SCALE = 1;

export const MIN_SCALE = 0.5;

export const MAX_SCALE = 3;

export const SCALE_STEP = 0.1;

export const DEFAULT_POSITION = {
  x: 0,
  y: 0,
};

export const CROP_RATIOS: CropRatio[] = [
  {
    label: '1:1',
    width: 1,
    height: 1,
  },
  {
    label: '4:3',
    width: 4,
    height: 3,
  },
  {
    label: '16:9',
    width: 16,
    height: 9,
  },
  {
    label: '9:16',
    width: 9,
    height: 16,
  },
  {
    label: '3:2',
    width: 3,
    height: 2,
  },
];
