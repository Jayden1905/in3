import { normalFont } from "@/utils/fonts";
import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "IN3",
  description: "Robitcs and Coding Educaton for kids.",
  keywords: ["robotics", "coding", "education", "kids"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_with_bg.png" sizes="any" />
      </head>
      <body className={`${normalFont} text-dark bg-primary`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
