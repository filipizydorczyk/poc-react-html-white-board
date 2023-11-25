import React, { useState } from "react";
import { Resizer } from "./Resizer";
import { Cords } from "../types";
import { X, Y } from "../constants";

interface WhiteBoardContainerProps {
  top: number;
  left: number;
}

export const WhiteBoardContainer = ({
  children,
  top,
  left,
}: React.PropsWithChildren<WhiteBoardContainerProps>) => {
  const [size, setSize] = useState<Cords>([100, 100]);
  const outerStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "white",
    backgroundSize: "40px 40px",
    // backgroundImage: /* CSS */ `linear-gradient(to right, rgb(218, 218, 218) 1px, transparent 1px), linear-gradient(to bottom, rgb(218, 218, 218) 1px, transparent 1px);`,
    minWidth: "100px",
    minHeight: "100px",
    width: size[X],
    height: size[Y],
    top,
    left,
  };
  const innerStyles: React.CSSProperties = {
    position: "relative",
    minWidth: "100px",
    minHeight: "100px",
    width: size[X],
    height: size[Y],
  };

  return (
    <div style={outerStyles}>
      <div style={innerStyles}>
        <Resizer
          orientation="right"
          // onResize={(delta) => setSize([size[X] + delta, size[Y]])}
        />
        <Resizer
          orientation="bottom"
          // onResize={(delta) => setSize([size[X], size[Y] + delta])}
        />
        {children}
      </div>
    </div>
  );
};
