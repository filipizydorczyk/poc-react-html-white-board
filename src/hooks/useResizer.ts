import { useState } from "react";
import { Cords } from "../types";
import { X, Y } from "../constants";

const useResizer = (isVertical: boolean) => {
  const [refrencePont, setRefrencePoint] = useState<Cords>([0, 0]);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setRefrencePoint([e.clientX, e.clientY]);
    setIsResizing(true);
  };

  const finishResizing: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsResizing(false);
  };

  const getDelta = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    const refrenceCord = isVertical ? refrencePont[Y] : refrencePont[X];
    const deltaCord = isVertical ? e.clientY : e.clientX;
    return deltaCord - refrenceCord;
  };

  return { isResizing, startResizing, finishResizing, getDelta };
};

export { useResizer };
