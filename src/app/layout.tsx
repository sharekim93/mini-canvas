import "./globals.css";
import type { Metadata } from "next";

import Header from "@/layouts/header/Header";

import RecoilRootProvider from "@/components/recoilRootProvider/RecoilRootProvider";
import ToastProvider from "@/components/toastProvider/ToastProvider";

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
        <RecoilRootProvider>
          <ToastProvider />
          <Header />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
