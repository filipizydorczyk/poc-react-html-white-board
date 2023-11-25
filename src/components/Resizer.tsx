import React from "react";
import { Orientation } from "../types";
import { useResizer } from "../hooks/useResizer";

interface ResizerProps {
  orientation: Orientation;
  onResize?: (delta: number) => void;
}

const WIDTH = 4;

export const Resizer = ({ orientation, onResize = () => {} }: ResizerProps) => {
  const isVertical = orientation === "top" || orientation === "bottom";
  const { isResizing, startResizing, finishResizing, getDelta } =
    useResizer(isVertical);

  const orientationStyles: Record<Orientation, React.CSSProperties> = {
    top: { top: 0, right: 0, left: 0, height: WIDTH },
    bottom: { bottom: 0, right: 0, left: 0, height: WIDTH },
    right: { top: 0, right: 0, bottom: 0, width: WIDTH },
    left: { top: 0, left: 0, bottom: 0, width: WIDTH },
  };

  const resizerStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "rgb(120, 190, 251)",
    ...orientationStyles[orientation],
  };

  return (
    <div
      onMouseDown={startResizing}
      onMouseUp={finishResizing}
      onDrag={(e) => (isResizing ? onResize(getDelta(e)) : null)}
      style={resizerStyles}
    ></div>
  );
};
