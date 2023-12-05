import React from "react";
import { useItem } from "../hooks/useItem";
import { X, Y } from "../constants";

// interface WhiteBoardItemProps {}

export const WhiteBoardItem = () => {
  const { position, focus, unfocus, updateItemPosition } = useItem();
  const containerStyles: React.CSSProperties = {
    width: 100,
    height: 100,
    resize: "both",
    backgroundColor: "crimson",
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

  const onResize = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;

    console.log(target.style.width, target.style.height);
  }

  // https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
  function broofa() {
    return "xxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  return (
    <div style={styles}>
      <span
        style={tagStyles}
        onMouseDown={focus}
        onMouseUp={unfocus}
        onMouseMove={updateItemPosition}
      >
        {broofa()}
      </span>
      <div
        style={containerStyles}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={onResize}
      ></div>
    </div>
  );
};
