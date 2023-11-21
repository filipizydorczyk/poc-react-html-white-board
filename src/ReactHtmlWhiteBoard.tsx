import React from "react";
import { WhiteBoardSpace } from "./WhiteBoardSpace";
import { WhiteBoardContainer } from "./WhiteBoardContainer";

interface ReactHtmlWhiteBoardProps {
  width: number;
  height: number;
}

export const ReactHtmlWhiteBoard = ({
  width,
  height,
}: ReactHtmlWhiteBoardProps) => {
  return (
    <WhiteBoardSpace width={width} height={height}>
      <WhiteBoardContainer top={15} left={15}></WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
