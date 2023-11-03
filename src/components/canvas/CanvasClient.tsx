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

import { Box, Paper } from "@mui/material";
import useComponentSize from "@/utils/useComponentSize";

const CanvasClient = () => {
  const canvasNodeArr = useRecoilValue(canvasNodeArrState);
  const [componentRef, paperSize] = useComponentSize();

  const BoxCSS = { width: "100%" };

  const stageProps = {
    container: "drawingPaper",
    width: paperSize.width,
    height: paperSize.height,
  };

  // SSR 로딩이 완료되면 recoil-persist 와 동기화
  const setSsrCompleted = useSsrComplectedState();
  React.useEffect(setSsrCompleted, [setSsrCompleted]);

  return (
    <Box ref={componentRef} sx={BoxCSS}>
      <Paper id="drawingPaper" elevation={3}>
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
      </Paper>
    </Box>
  );
};

export default CanvasClient;
