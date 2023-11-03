import React from "react";
import dynamic from "next/dynamic";

const CanvasClient = dynamic(() => import("@/components/canvas/CanvasClient"), {
  ssr: false,
});

const Canvas = () => {
  return <CanvasClient />;
};

export default Canvas;
