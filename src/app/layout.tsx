import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMNI-X",
  description: "Developer Portfolio",
  icons: {
    icon: "/images/image.png",
  },
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