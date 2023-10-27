import React from "react";
import dynamic from "next/dynamic";
import { Box, Paper } from "@mui/material";

const Canvas = dynamic(() => import("@/components/canvas/Canvas"), {
  ssr: false,
});

const BoxCSS = { width: "100%" };

const DrawingArea = () => {
  return (
    <Box sx={BoxCSS}>
      <Paper id="drawingPaper" elevation={3}>
        <Canvas />
      </Paper>
    </Box>
  );
};

export default DrawingArea;
