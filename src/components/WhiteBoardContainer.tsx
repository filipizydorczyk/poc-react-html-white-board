import React from "react";
import { Cords } from "../types";
import { X, Y } from "../constants";

interface WhiteBoardContainerProps {
  size: Cords;
  zoom?: number;
}

export const WhiteBoardContainer = ({
  children,
  size,
  zoom = 1,
}: React.PropsWithChildren<WhiteBoardContainerProps>) => {
  const styles: React.CSSProperties = {
    position: "relative",
    backgroundColor: "white",
    backgroundSize: "40px 40px",
    backgroundImage: /* CSS */ `linear-gradient(to right, rgb(218, 218, 218) 1px, transparent 1px), linear-gradient(to bottom, rgb(218, 218, 218) 1px, transparent 1px)`,
    width: size[X],
    height: size[Y],
    transform: `scale(${zoom})`
  };

  return <div style={styles}>{children}</div>;
};
