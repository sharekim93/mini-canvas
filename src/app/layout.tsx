import "./globals.css";
import type { Metadata } from "next";
import Header from "@/layouts/header/Header";
import Sidebar from "@/layouts/siderBar/Sidebar";
import DrawingArea from "@/layouts/drawingArea/DrawingArea";

export const metadata: Metadata = {
  title: "mini-canvas",
  description: "on canvas, design your own paper",
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
        <div className="flex">
          <Sidebar />
          <DrawingArea />
        </div>
      </body>
    </html>
  );
}
