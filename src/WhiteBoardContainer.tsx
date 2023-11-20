import React from "react";

// interface WhiteBoardContainerProps {}

export const WhiteBoardContainer = ({ children }: React.PropsWithChildren) => {
  const outerStyles: React.CSSProperties = {
    position: "absolute",
    backgroundColor: "white",
    backgroundSize: "40px 40px",
    backgroundImage: /* CSS */ `linear-gradient(
        to right,
        rgb(218, 218, 218) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgb(218, 218, 218) 1px, transparent 1px);`,
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
