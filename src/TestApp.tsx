import React, { useState } from "react";
import { ReactHtmlWhiteBoard } from "./ReactHtmlWhiteBoard";

export const TestApp = () => {
  const [viewPort, setViewPort] = useState(600);
  const [size, setSize] = useState(800);
  const [zoom, setZoom] = useState(1);

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
      />
    </>
  );
};
