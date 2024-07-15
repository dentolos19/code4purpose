import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code4Purpose",
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "h-dvh")}>{props.children}</body>
    </html>
  );
}