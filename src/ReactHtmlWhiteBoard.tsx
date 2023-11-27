import React from "react";
import { WhiteBoardSpace } from "./components/WhiteBoardSpace";
import { WhiteBoardContainer } from "./components/WhiteBoardContainer";
import { X, Y } from "./constants";
import { Cords } from "./types";
import { WhiteBoardItem } from "./components/WhiteBoardItem";

interface ReactHtmlWhiteBoardProps {
  size: Cords;
}

export const ReactHtmlWhiteBoard = ({ size }: ReactHtmlWhiteBoardProps) => {
  return (
    <WhiteBoardSpace width={size[X]} height={size[Y]}>
      <WhiteBoardContainer
        size={[size[X] + 100, size[Y] + 100]}
      >
        <WhiteBoardItem/>
      </WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
