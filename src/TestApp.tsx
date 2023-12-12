import React, { useState } from "react";
import { ReactHtmlWhiteBoard } from "./ReactHtmlWhiteBoard";
import { WhiteBoardItemWrapper } from "./components/WhiteBoardItemWrapper";

export const TestApp = () => {
  const [viewPort, setViewPort] = useState(600);
  const [size, setSize] = useState(800);
  const [zoom, setZoom] = useState(1);

  const redSquareStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    minWidth: 100,
    minHeight: 100,
    backgroundColor: "crimson",
  };

  return (
    <>
      <label>
        View Port:{" "}
        <input
          name="viewPort"
          type="number"
          defaultValue={600}
          onChange={(e) => setViewPort(Number(e.target.value))}
        />
      </label>
      <label>
        Size:{" "}
        <input
          name="size"
          type="number"
          defaultValue={800}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </label>
      <label>
        Zoom:{" "}
        <input
          name="zoom"
          type="number"
          step={0.1}
          defaultValue={1}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      </label>
      <ReactHtmlWhiteBoard
        size={[size, size]}
        viewPort={[viewPort, viewPort]}
        zoom={zoom}
      >
        <WhiteBoardItemWrapper onResize={console.log}>
          <div style={redSquareStyle} />
        </WhiteBoardItemWrapper>
        <WhiteBoardItemWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QdBZY2fkU-0?si=Jzjo9kViK-48L5Iq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </WhiteBoardItemWrapper>
      </ReactHtmlWhiteBoard>
    </>
  );
};
