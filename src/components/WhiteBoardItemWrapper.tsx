import React, { useState } from "react";
import { useItem } from "../hooks/useItem";
import { X, Y } from "../constants";
import { Cords } from "../types";

interface WhiteBoardItemWrapperProps {
  itemId?: string;
  // start position
  // enable/discable resizing
  // start size
  children: JSX.Element;
  onResize?: (id: string, position: Cords) => void;
}

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function broofa() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const WhiteBoardItemWrapper = ({
  children,
  itemId,
  onResize = () => {},
}: WhiteBoardItemWrapperProps) => {
  const { position, focus, unfocus, updateItemPosition } = useItem();
  const [id] = useState(itemId || broofa());
  const containerStyles: React.CSSProperties = {
    resize: "both",
    border: "1px solid transparent",
    overflow: "auto",
  };
  const styles: React.CSSProperties = {
    position: "absolute",
    top: position[Y],
    left: position[X],
    width: "auto",
    height: "auto",
  };
  const tagStyles: React.CSSProperties = {
    color: "#666666",
    cursor: "pointer",
    userSelect: "none",
  };

  const onResizeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;

    onResize(id, [Number(target.style.width.replace("px","")), Number(target.style.height.replace("px",""))]);
  };

  return (
    <div style={styles}>
      <span
        style={tagStyles}
        onMouseDown={focus}
        onMouseUp={unfocus}
        onMouseMove={updateItemPosition}
      >
        {id}
      </span>
      <div
        style={containerStyles}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={onResizeHandler}
      >
        {children}
      </div>
    </div>
  );
};
