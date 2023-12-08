import React from "react";
import { useSpace } from "../hooks/useSpace";
import { Cords } from "../types";
import { X, Y } from "../constants";

interface WhiteBoardSpaceProps {
  size: Cords;
}

export const WhiteBoardSpace = ({
  size,
  children,
}: React.PropsWithChildren<WhiteBoardSpaceProps>) => {
  const { focus, unfocus, updateScrolling } = useSpace();
  const styles: React.CSSProperties = {
    overflow: "scroll",
    backgroundColor: "#ededed",
    width: size[X],
    height: size[Y],
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
