import "./globals.css";
import type { Metadata } from "next";
import Header from "@/layouts/header/Header";
import Sidebar from "@/layouts/siderBar/Sidebar";
import DrawingArea from "@/layouts/drawingArea/DrawingArea";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "mini-canvas",
  description: "on canvas, design your own paper",
};

const containerStyle = {
  display: "flex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container disableGutters sx={containerStyle}>
          <Sidebar />
          <DrawingArea />
        </Container>
      </body>
    </html>
  );
}
