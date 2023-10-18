import "./globals.css";
import type { Metadata } from "next";
import Header from "@/layouts/header/Header";

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
      </body>
    </html>
  );
}
