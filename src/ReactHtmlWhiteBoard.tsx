import React from "react";
import { WhiteBoardSpace } from "./components/WhiteBoardSpace";
import { WhiteBoardContainer } from "./components/WhiteBoardContainer";
import { Cords } from "./types";

interface ReactHtmlWhiteBoardProps {
  size: Cords;
  viewPort: Cords;
  zoom?: number;
}

export const ReactHtmlWhiteBoard = ({
  size,
  viewPort,
  zoom = 1,
  children,
}: React.PropsWithChildren<ReactHtmlWhiteBoardProps>) => {
  return (
    <WhiteBoardSpace size={viewPort}>
      <WhiteBoardContainer size={size} zoom={zoom}>
        {children}
      </WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
