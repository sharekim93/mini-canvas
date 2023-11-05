import React from "react";
import { Container } from "@mui/material";
import Sidebar from "@/layouts/siderBar/Sidebar";
import Canvas from "@/components/canvas/Canvas";

const Home = () => {
  const containerStyle = {
    display: "flex",
    position: "fixed",
  };

  return (
    <Container disableGutters sx={containerStyle}>
      <Sidebar />
      <Canvas />
    </Container>
  );
};

export default Home;
