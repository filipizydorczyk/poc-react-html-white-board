import React from "react";
import { WhiteBoardSpace } from "./components/WhiteBoardSpace";
import { WhiteBoardContainer } from "./components/WhiteBoardContainer";
import { Cords } from "./types";
import { WhiteBoardItem } from "./components/WhiteBoardItem";

interface ReactHtmlWhiteBoardProps {
  size: Cords;
  viewPort: Cords;
  zoom?: number;
}

export const ReactHtmlWhiteBoard = ({
  size,
  viewPort,
  zoom = 1,
}: ReactHtmlWhiteBoardProps) => {
  return (
    <WhiteBoardSpace size={viewPort}>
      <WhiteBoardContainer size={size} zoom={zoom}>
        <WhiteBoardItem />
      </WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
