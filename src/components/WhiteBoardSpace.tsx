import React from "react";
import { useSpace } from "../hooks/useSpace";

interface WhiteBoardSpaceProps {
  width: number;
  height: number;
}

export const WhiteBoardSpace = ({
  width,
  height,
  children,
}: React.PropsWithChildren<WhiteBoardSpaceProps>) => {
  const { focus, unfocus, updateScrolling } = useSpace();
  const styles: React.CSSProperties = {
    overflow: "scroll",
    backgroundColor: "#ededed",
    width,
    height,
  };

  return (
    <div
      onMouseDown={focus}
      onMouseUp={unfocus}
      onMouseMove={updateScrolling}
      style={styles}
    >
      {children}
    </div>
  );
};
