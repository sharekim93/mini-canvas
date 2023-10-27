"use client";

import React from "react";
import {
  Stage as KonvaStage,
  Layer as KonvaLayer,
  Star as KonvaStar,
  KonvaNodeComponent,
} from "react-konva";

const stageProps = {
  container: "drawingPaper",
  width: 500,
  height: 500,
};

const starExampleProps = {
  x: 100,
  y: 200,
  numPoints: 5,
  innerRadius: 70,
  outerRadius: 70,
  fill: "yellow",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
};

const Canvas = () => {
  return (
    <KonvaStage {...stageProps}>
      <KonvaLayer>
        <KonvaStar {...starExampleProps} />
      </KonvaLayer>
    </KonvaStage>
  );
};

export default Canvas;
