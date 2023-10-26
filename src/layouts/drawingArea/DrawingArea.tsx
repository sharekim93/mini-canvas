"use client";

import React from "react";
import { Box, Paper } from "@mui/material";
import Stage from "@/components/stage/Stage";

const BoxCSS = { width: "100%" };

const DrawingArea = () => {
  return (
    <Box sx={BoxCSS}>
      <Paper elevation={3}></Paper>
    </Box>
  );
};

export default DrawingArea;
