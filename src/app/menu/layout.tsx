import type { Metadata } from "next";
import Header from "../header/page";

import Template from "./template"

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
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
