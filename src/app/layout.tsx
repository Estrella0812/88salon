import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";


export const metadata: Metadata = {
  title: "88쌀롱",
  description: "88쌀롱 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
