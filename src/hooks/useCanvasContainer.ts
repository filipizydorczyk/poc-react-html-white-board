import { useState } from "react";
import { X, Y } from "../constants";
import { Cords } from "../types";

const useCanvasContainer = () => {
  const [position, setPosition] = useState<Cords>([0, 0]);

  const [refrencePoint, setRefrencePoint] = useState<Cords>([0, 0]);
  const [focusPoint, setFocusPoint] = useState<Cords>();

  const focus: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setFocusPoint([e.clientX, e.clientY]);
    setRefrencePoint(position);
  };

  const unfocus: React.MouseEventHandler<HTMLDivElement> = () => {
    setFocusPoint(undefined);
  };

  const updateContainerPosition: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (focusPoint) {
      const x = refrencePoint[X] - (focusPoint[X] - e.clientX);
      const y = refrencePoint[Y] - (focusPoint[Y] - e.clientY);

      setPosition([x, y]);
    }
  };

  return { position, focus, unfocus, updateContainerPosition };
};

export { useCanvasContainer };
