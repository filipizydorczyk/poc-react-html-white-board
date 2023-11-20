import React from "react";

// interface WhiteBoardSpaceProps {}

export const WhiteBoardSpace = ({ children }: React.PropsWithChildren) => {
  const styles: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
  };
  return <div style={styles}>{children}</div>;
};
