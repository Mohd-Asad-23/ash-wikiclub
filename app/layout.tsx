import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wiki Club Programs",
  description: "Reusable program pages for Wiki Club initiatives.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
