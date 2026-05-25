export interface Position {
  x: number;
  y: number;
}

export interface CropRatio {
  label: string;
  width: number;
  height: number;
}

export interface UploadedImage {
  file: File;
  url: string;
  width?: number;
  height?: number;
}
