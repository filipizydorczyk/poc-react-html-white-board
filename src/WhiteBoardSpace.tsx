import React from "react";

interface WhiteBoardSpaceProps {
  width: number;
  height: number;
}

export const WhiteBoardSpace = ({
  width,
  height,
  children,
}: React.PropsWithChildren<WhiteBoardSpaceProps>) => {
  const styles: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ededed",
    width,
    height,
  };
  return <div style={styles}>{children}</div>;
};
