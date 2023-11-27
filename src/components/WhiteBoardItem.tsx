import React from "react";
import { useItem } from "../hooks/useItem";
import { X, Y } from "../constants";

// interface WhiteBoardItemProps {}

export const WhiteBoardItem = () => {
  const {position, focus, unfocus, updateItemPosition} = useItem();
  const styles: React.CSSProperties = {
    position: "absolute",
    top: position[Y],
    left: position[X],
    width: 100,
    height: 100,
    resize: "both",
    backgroundColor: "crimson",
    border: "1px solid transparent",
    overflow: "auto",
  };
  return (
    <div
      style={styles}
      onMouseDown={focus}
      onMouseUp={unfocus}
      onMouseMove={updateItemPosition}
    ></div>
  );
};
