import React from "react";
import { WhiteBoardSpace } from "./components/WhiteBoardSpace";
import { WhiteBoardContainer } from "./components/WhiteBoardContainer";
import { X, Y } from "./constants";
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
    <WhiteBoardSpace width={viewPort[X]} height={viewPort[Y]}>
      <WhiteBoardContainer size={size} zoom={zoom}>
        <WhiteBoardItem />
      </WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
