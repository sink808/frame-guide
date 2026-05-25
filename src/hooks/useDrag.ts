import { MouseEvent as ReactMouseEvent, useRef, useState } from 'react';

import { Position } from 'types';

interface Props {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

const useDrag = ({ position, setPosition }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const startPoint = useRef({
    x: 0,
    y: 0,
  });

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    startPoint.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    setPosition({
      x: event.clientX - startPoint.current.x,
      y: event.clientY - startPoint.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return {
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  };
};

export default useDrag;
