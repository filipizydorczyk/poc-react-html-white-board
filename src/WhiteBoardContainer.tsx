import React from "react";

interface WhiteBoardContainerProps {
  top: number;
  left: number;
}

export const WhiteBoardContainer = ({
  children,
  top,
  left,
}: React.PropsWithChildren<WhiteBoardContainerProps>) => {
  const outerStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "white",
    backgroundSize: "40px 40px",
    // backgroundImage: /* CSS */ `linear-gradient(to right, rgb(218, 218, 218) 1px, transparent 1px), linear-gradient(to bottom, rgb(218, 218, 218) 1px, transparent 1px);`,
    minWidth: "100px",
    minHeight: "100px",
    top,
    left,
  };
  const innerStyles: React.CSSProperties = {
    position: "relative",
  };

  return (
    <div style={outerStyles}>
      <div style={innerStyles}>{children}</div>
    </div>
  );
};
