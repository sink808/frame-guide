import { useCallback, useState } from 'react';

import { UploadedImage } from 'types';

const useImageUpload = () => {
  const [image, setImage] = useState<UploadedImage | null>(null);

  const createImage = useCallback((file: File) => {
    const url = URL.createObjectURL(file);

    setImage({
      file,
      url,
    });
  }, []);

  const uploadImage = useCallback(
    (file: File | null) => {
      if (!file) {
        return;
      }

      if (!file.type.startsWith('image/')) {
        return;
      }

      createImage(file);
    },
    [createImage]
  );

  const removeImage = useCallback(() => {
    if (image?.url) {
      URL.revokeObjectURL(image.url);
    }

    setImage(null);
  }, [image]);

  return {
    image,
    uploadImage,
    removeImage,
  };
};

export default useImageUpload;
