import React from "react";

interface WhiteBoardSpaceProps {
  width: number;
  height: number;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
}

export const WhiteBoardSpace = ({
  width,
  height,
  children,
  onMouseUp,
  onMouseDown,
  onMouseMove,
}: React.PropsWithChildren<WhiteBoardSpaceProps>) => {
  const styles: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ededed",
    width,
    height,
  };
  return (
    <div
      style={styles}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};
