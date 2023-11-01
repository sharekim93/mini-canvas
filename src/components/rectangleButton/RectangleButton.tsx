"use client";

import React from "react";

import { useSetRecoilState } from "recoil";
import { canvasNodeArrState } from "@/store/atoms";
import { Shape, Rectangle } from "@/interface/interface";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RectangleIcon from "@mui/icons-material/Rectangle";

const RectangleButton = () => {
  const setCanvasNodeArr = useSetRecoilState<Shape[]>(canvasNodeArrState);

  const addRectangle = () => {
    setCanvasNodeArr((prev) => [...prev, new Rectangle()]);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={addRectangle}>
        <ListItemIcon>
          <RectangleIcon />
        </ListItemIcon>
        <ListItemText primary="Rectangle" />
      </ListItemButton>
    </ListItem>
  );
};

export default RectangleButton;
