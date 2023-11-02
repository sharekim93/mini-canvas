"use client";

import React from "react";
import {
  Stage as KonvaStage,
  Layer as KonvaLayer,
  Rect as KonvaRect,
} from "react-konva";
import { useRecoilValue } from "recoil";
import { canvasNodeArrState, useSsrComplectedState } from "@/store/atoms";
import { Shape } from "@/interface/interface";

const stageProps = {
  container: "drawingPaper",
  width: 500,
  height: 500,
};

const Canvas = () => {
  const canvasNodeArr = useRecoilValue(canvasNodeArrState);

  // SSR 로딩이 완료되면 recoil-persist 와 동기화
  const setSsrCompleted = useSsrComplectedState();
  React.useEffect(setSsrCompleted, [setSsrCompleted]);

  return (
    <KonvaStage {...stageProps}>
      <KonvaLayer>
        {canvasNodeArr &&
          canvasNodeArr.map((node: Shape) => {
            return node.type === "Rect" ? (
              <KonvaRect key={node.id} {...node} />
            ) : null;
          })}
      </KonvaLayer>
    </KonvaStage>
  );
};

export default Canvas;
