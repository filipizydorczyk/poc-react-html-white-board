import { useState } from "react";
import { Cords } from "../types";
import { X, Y } from "../constants";

const useSpace = () => {
  const [focusPoint, setFocusPoint] = useState<Cords>();
  const [focusScrolling, setFocusScrolling] = useState<Cords>();

  const focus: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setFocusPoint([e.clientX, e.clientY]);
    setFocusScrolling([e.currentTarget.scrollLeft, e.currentTarget.scrollTop]);
  };

  const unfocus: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setFocusPoint(undefined);
  };

  const updateScrolling: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (focusPoint && focusScrolling) {
      e.currentTarget.scrollTop = focusScrolling[Y] + (focusPoint[Y] - e.clientY);
      e.currentTarget.scrollLeft = focusScrolling[X] + (focusPoint[X] - e.clientX);
    }
  };

  return { focus, unfocus, updateScrolling };
};

export { useSpace };
